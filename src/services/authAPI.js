import fetcher from "./fetcher";

const authAPI = {
  signin: (values) => {
    return fetcher.post("QuanLyNguoiDung/DangNhap", values);
  },

  signup: async (values) => {
    return fetcher.post("QuanLyNguoiDung/DangKy", {
      ...values,
      params: {
        maNhom: "GP06",
      },
    });
  },
  updateUserClient: (values) => {
    return fetcher.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", {
      ...values,
      maNhom: "GP06",
    });
  },

};

export default authAPI;
