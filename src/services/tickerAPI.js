import fetcher from "./fetcher";

const tickerAPI = {
  getMovieRap: () => {
    return fetcher.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maNhom: "GP06",
      },
    });
  },

  getMovieRapDetail: (movieId) => {
    return fetcher.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: movieId,
      },
    });
  },
  getDanhSachPhongVe: (maLichChieu) => {
    return fetcher.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: maLichChieu,
      }
    })
  },

  datVe: (thongTinVe) => {
    return fetcher.post("QuanLyDatVe/DatVe", thongTinVe)
  }
};

export default tickerAPI;
