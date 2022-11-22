import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signupAction } from "../../../slices/authSlice";

import "./Signup.scss";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      hoTen: "",
      soDt: "",
      email: "",
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched", // điều kiện kích hoạt validation, mặc định onSubmit
  });
  const { errors } = formState;

  const onSubmit = async (values) => {
    // dispatch lấy dữ liệu đăng nhập xác thực của user
    const data = await dispatch(signupAction(values));
    console.log(data);

    if (data.type === "auth/signup/fulfilled") {
      alert("success");
      navigate("/signin");
    } else {
      alert(data.error.message);
    }
  };

  return (
    <div className="register">
      <div className="overlay_register">
        <div />
        <div className="form_register mt-5 mb-3">
          <h3 className="title-signin bg-secondary text-center mb-5 py-3">
            ĐĂNG KÝ TÀI KHOẢN
          </h3>

          <form
            onSubmit={handleSubmit(onSubmit, (err) => {
              console.log(err);
            })}
          >
            {/* hoTen */}
            <div className="account input-group my-4">
              <input
                {...register("hoTen", {
                  required: {
                    value: true,
                    message: "*Họ và tên không để trống",
                  },
                  minLength: { value: 5, message: "Họ và tên từ 5-30 ký tự" },
                  maxLength: { value: 30, message: "Họ và tên từ 5-30 ký tự" },
                })}
                className="form-control"
                placeholder="Họ và tên"
              />
              <div className="w-100 text-danger">
                {errors?.hoTen && <span>{errors.hoTen.message}</span>}
              </div>
            </div>

            {/* sodt */}
            <div className="numberPhone input-group  my-4 ">
              <input
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
                className="form-control"
                placeholder="Số điện thoại"
              />
              <div className="w-100 text-danger">
                {errors?.soDt && <span>{errors?.soDt?.message}</span>}
              </div>
            </div>

            {/*email */}
            <div className="account input-group">
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email không để trống",
                  },
                  minLength: { value: 5, message: "Tài khoản từ 5-20 ký tự" },
                  maxLength: { value: 20, message: "Tài khoản từ 5-20 ký tự" },
                })}
                className="form-control"
                placeholder="Email"
              />
              <div className="w-100 text-danger">
                {errors?.email && <span>{errors?.email?.message}</span>}
              </div>
            </div>

            {/* tai khoan */}
            <div className="account input-group  my-4 ">
              <input
                {...register("taiKhoan", {
                  required: {
                    value: true,
                    message: "Tài khoản không để trống",
                  },
                  minLength: { value: 5, message: "Tài khoản từ 5-20 ký tự" },
                  maxLength: { value: 20, message: "Tài khoản từ 5-20 ký tự" },
                })}
                className="form-control"
                placeholder="Tài khoản"
              />
              <div className="w-100 text-danger">
                {errors?.taiKhoan && <span>{errors?.taiKhoan?.message}</span>}
              </div>
            </div>
            {/* matKhau */}
            <div className="password my-4 input-group">
              <input
                {...register("matKhau", {
                  required: { value: true, message: "Mật khẩu không để trống" },
                  minLength: { value: 5, message: "Mật khẩu từ 5-20 ký tự" },
                  maxLength: { value: 20, message: "Mật khẩu từ 5-20 ký tự" },
                })}
                className="form-control"
                placeholder="Mật khẩu"
              />
              <div className="w-100 text-danger">
                {errors?.matKhau && <span>{errors?.matKhau?.message}</span>}
              </div>
            </div>

            <div className="text-center">
              <button disabled={loading} className="btn btn-success mb-3">
                Đăng ký
              </button>
              {error && <p>{error}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
