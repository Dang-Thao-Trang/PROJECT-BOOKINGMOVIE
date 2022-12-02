import { useEffect } from "react";


import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import authAPI from '../../../services/authAPI';
import swal from "sweetalert";
import { clearError } from "../../../slices/authSlice";
import './style.css'
const UpdateAccount = () => {
    const dispatch = useDispatch();
    const { loading, user, error } = useSelector((state) => state.auth);
    const { register, handleSubmit, formState } = useForm({
        defaultValues: { taiKhoan: `${user.taiKhoan}`, matKhau: "", email: `${user.email}`, soDt: `${user.soDT}`, maLoaiNguoiDung: "KhachHang", hoTen: `${user.hoTen}` },
        mode: "onTouched", // điều kiện kích hoạt validation, mặc định onSubmit
    });

    const onSubmit = (values) => {
        // console.log(values);
        authAPI.updateUserClient(values);

        alert("Để kiểm tra xem đã cập nhật thành công vui lòng đăng nhập lại")
        alert("Nếu không thành công vui lòng điền lại email khác")
    }

    const { errors } = formState;
    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="account input-group">
                    <input
                        {...register("taiKhoan")
                        }
                        type="text"
                        input="text"
                        className="form-control input"
                        placeholder="Tài khoản"
                        value={user.taiKhoan}

                    />
                </div>
                <div className="password my-2 input-group">
                    <input

                        className="form-control input"
                        placeholder="Mật khẩu"
                        type="password"
                        input="password"
                        {...register("matKhau", {
                            required: { value: true, message: "Mật khẩu không để trống" },
                            minLength: { value: 5, message: "Mật khẩu từ 5-20 ký tự" },
                            maxLength: { value: 20, message: "Mật khẩu từ 5-20 ký tự" },
                            pattern: {
                                value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
                                message:
                                    "Mật khẩu có ít nhất 1 ký tự hoa, 1 ký tự đặc biệt, 1 ký tự số",
                            },
                        })}
                    />

                </div>
                <div className="w-100 text-danger">
                    {errors.matKhau && <span>{errors.matKhau.message}</span>}
                </div>
                <div className="account my-2 input-group">
                    <input
                        className="form-control input"
                        placeholder="Email"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email không để trống",
                            },
                            minLength: { value: 5, message: "email từ 5-20 ký tự" },
                            maxLength: { value: 20, message: "email khoản từ 5-20 ký tự" },
                            pattern: {
                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                message: "email không đúng định dạng",
                            },
                        })}
                    />
                </div>
                <div className="w-100 text-danger">
                    {errors?.email && <span>{errors?.email?.message}</span>}
                </div>
                <div className="account my-2 input-group">
                    <input


                        className="form-control input"
                        placeholder="Số điện thoại"
                        {...register("soDt", {
                            required: {
                                value: true,
                                message: "Số điện thoại không để trống",
                            },
                            minLength: {
                                value: 5,
                                message: "Số điện thoại từ 5-11 ký tự",
                            },
                            maxLength: {
                                value: 11,
                                message: "Số điện thoại từ 5-11 ký tự",
                            },
                        })}

                    />
                </div>
                <div className="w-100 text-danger">
                    {errors?.soDt && <span>{errors?.soDt?.message}</span>}
                </div>
                <div className="account my-2 input-group">
                    <input
                        className="form-control input "
                        placeholder="Họ tên"
                        {...register("hoTen", {
                            required: {
                                value: true,
                                message: "*Họ và tên không để trống",
                            },
                            minLength: { value: 5, message: "Họ và tên từ 5-30 ký tự" },
                            maxLength: { value: 30, message: "Họ và tên từ 5-30 ký tự" },
                        })}

                    />
                </div>
                <div className="w-100 text-danger">
                    {errors?.hoTen && <span>{errors.hoTen.message}</span>}
                </div>
                <div className="text-center footer_form">
                    <button disabled={loading} className="btn update btn-warning my-1">
                        Cập nhật
                    </button>
                </div>
            </form>
        </div>

    );

}

export default UpdateAccount