// setup các hàm xử lý API liên quan đến movie
import fetcher from "./fetcher";

const movieAPI = {
  getBanners: async () => {
    return fetcher.get("QuanLyPhim/LayDanhSachBanner"); // key content là key dữ liệu thực cần lấy
  },

  getMovies: async () => {
    return fetcher.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP03",
      },
    });
  },

  getMovieDetails: (movieId) => {
    return fetcher.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
};

export default movieAPI;
