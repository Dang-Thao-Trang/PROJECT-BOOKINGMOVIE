import React, { useState } from "react";
import { useForm } from "react-hook-form";
import fetcher from "../../services/fetcher";

// Bắt buộc có: tenPhim, biDanh, moTa, ngayKhoiChieu, trailer, hinhAnh,maNhom
// không bắt buộc: dangChieu, danhGia, hot, sapChieu
// maNhom: hardcode (không cần tạo input)
// ngayKhoiChieu: DD-MM-YYYY (08-02-2022)
// hinhAnh: File
const AddMovie = () => {
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      tenPhim: "",
      biDanh: "",
      moTa: "",
      ngayKhoiChieu: "",
      trailer: "",
      hinhAnh: "",
    },
  });

  const [imgPreview, setImgPreview] = useState(null);

  const onSubmit = async (values) => {
    try {
      const payload = { ...values, hinhAnh: values.hinhAnh[0], maNhom: "GP01" };
      console.log(payload);

      // khi dữ liệu có định dạng đặc biệt như File,..
      //ta cần chuyển về định dạng multipart/form-data bằng cách tạo 1 instance từ class FormData về thêm dữ liệu bằng hàm append
      const formData = new FormData();
      for (let key in payload) {
        formData.append(key, payload[key]);
      }

      await fetcher.post("QuanLyPhim/ThemPhimUploadHinh", formData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeImage = (evt) => {
    //  nếu input type là file lấy thông tin file mà user chọn ta dùng evt.target.files
    const file = evt.target.files[0];
    if (!file) return;
    setValue("hinhAnh", file);
    // xử lý hiển thị hình ảnh preview ra cho user thấy
    const fileReader = new FileReader();
    console.log(fileReader);
    fileReader.readAsDataURL(file);
    fileReader.onload = (evt) => {
      setImgPreview(evt.target.result);
    };
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div>
        <label>Tên Phim</label>
        <input {...register("tenPhim")} />
      </div>
      <div>
        <label>Bí Danh</label>
        <input {...register("biDanh")} />
      </div>
      <div>
        <label>Mô tả</label>
        <input {...register("moTa")} />
      </div>
      <div>
        <label>Ngày khởi chiếu</label>
        <input {...register("ngayKhoiChieu")} />
      </div>
      <div>
        <label>trailer</label>
        <input {...register("trailer")} />
      </div>
      <div>
        <label>Hình ảnh</label>

        <input
          type="file"
          {...register("hinhAnh")}
          onChange={handleChangeImage}
        />
        {imgPreview && (
          <img width={300} height={100} src={imgPreview} alt="preview" />
        )}
      </div>
      <button className="btn btn-danger">Thêm Movie</button>
    </form>
  );
};

export default AddMovie;
