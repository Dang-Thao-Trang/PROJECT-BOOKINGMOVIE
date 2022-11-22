import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

// kiểm tra xem user có quyền  truy cập bào /checkout/:checkoutId hay không
const UserProjected = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  // useLocation tra về 1 object chứa thông tin url hiện tại brower
  const location = useLocation();

  // chưa đăng nhập
  if (!user) {
    // lưu lại url hiện tại vào query param là redirectUrl để sau khi singin thành công user về lại url hiện tại
    // query params: url= "?key1=value1&value2=value2"
    const url = `/signin?redirectUrl=${location.pathname}`;
    return <Navigate to={url} replace />;
  }
  // children là nội dung ở giữa. logic children = singin
  return children;
};

export default UserProjected;
