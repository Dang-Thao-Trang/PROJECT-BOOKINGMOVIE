import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { signin } from "../../../slices/authSlice";
import "./Signin.scss";
// Navigate là componnet
import { BsPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

const Signin = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  // useSearchParams queryParams: chứa các giá trị param trên url
  const [searchParams, setSearchParams] = useSearchParams();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: { taiKhoan: "", matKhau: "" },
    mode: "onTouched", // điều kiện kích hoạt validation, mặc định onSubmit
  });

  const { errors } = formState;

  const onSubmit = (values) => {
    // dispatch lấy dữ liệu đăng nhập xác thực của user
    dispatch(signin(values));
  };

  if (user) {
    const redirectUrl = searchParams.get("redirectUrl");
    // có thông tin user => đã đăng nhập => redirect về redirectUrl hoặc home
    return <Navigate to={redirectUrl || "/"} replace />;
  }

  return (
    <div id="signin" className="signin">
      <div className="overlay-lognin"></div>
      <div className="form_signin">
        <h3 className="title-signin bg-secondary text-center mb-5 py-3">
          SIGN IN
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="account input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <BsPersonFill size={30} />
              </span>
            </div>
            <input
              {...register("taiKhoan", {
                required: { value: true, message: "Tài khoản không để trống" },
                minLength: { value: 5, message: "Tài khoản từ 5-20 ký tự" },
                maxLength: { value: 20, message: "Tài khoản từ 5-20 ký tự" },
              })}
              className="form-control"
              placeholder="Tài khoản"
            />
            <div className="w-100 text-danger">
              {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
            </div>
          </div>

          <div className="password my-5 input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <RiLockPasswordFill size={30} />
              </span>
            </div>
            <input
              {...register("matKhau", {
                required: { value: true, message: "Mật khẩu không để trống" },
                minLength: { value: 5, message: "Mật khẩu từ 5-20 ký tự" },
                maxLength: { value: 20, message: "Mật khẩu từ 5-20 ký tự" },
              })}
              className="form-control"
              placeholder="Tài khoản"
            />
            <div className="w-100 text-danger">
              {errors.matKhau && <span>{errors.matKhau.message}</span>}
            </div>
          </div>

          <div className="text-center">
            <button disabled={loading} className="btn btn-warning my-1">
              Đăng nhập
            </button>
            <h6>{error && <p className="text-white">{error}</p>}</h6>
            <div>
              <h6 className="mt-1 fs-6">
                Bạn chưa có tài khoản? <Link to="/signup">Đăng Ký</Link>
              </h6>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signin;
