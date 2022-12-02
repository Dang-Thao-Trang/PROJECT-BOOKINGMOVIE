import React from 'react'

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import authAPI from '../../../services/authAPI';
import './style.css'
const UpdateAccount = () => {
    const dispatch = useDispatch();
    const { loading, user } = useSelector((state) => state.auth);
    const { register, handleSubmit, formState } = useForm({
        defaultValues: { taiKhoan: "", matKhau: "", email: "", soDt: "", maLoaiNguoiDung: "KhachHang", hoTen: "" },
        mode: "onTouched", // điều kiện kích hoạt validation, mặc định onSubmit
    });

    const onSubmit = (values) => {

        authAPI.updateUserClient(values)
        alert("Cập nhật thành công vui lòng đăng nhập lại")

    }
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


                    />
                </div>
                <div className="password my-2 input-group">
                    <input

                        className="form-control input"
                        placeholder="Mật khẩu"
                        type="password"
                        input="password"
                        {...register("matKhau")}
                    />
                </div>
                <div className="account my-2 input-group">
                    <input
                        className="form-control input"
                        placeholder="Email"
                        {...register("email")}


                    />
                </div>
                <div className="account my-2 input-group">
                    <input


                        className="form-control input"
                        placeholder="Số điện thoại"
                        {...register("soDt")}

                    />
                </div>
                <div className="account my-2 input-group">
                    <input
                        className="form-control input "
                        placeholder="Họ tên"
                        {...register("hoTen")}

                    />
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