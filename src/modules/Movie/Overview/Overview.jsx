import React from "react";
import useRequest from "../../../Hooks/useRequest";
import movieAPI from "../../../services/movieAPI";
import moment from "moment";
import { Rate, Progress } from "antd";
// import "./OverTime.css";
import "./OverTime.scss";

const OverTime = ({ movieId }) => {
  const { data: movie } = useRequest(() => movieAPI.getMovieDetails(movieId));
  if (!movie) {
    return null;
  }

  return (
    <div className="overview">
      <div
        className="background"
        style={{
          background: `url(${movie.hinhAnh}) center/ cover repeat`,
        }}
      >
        <div className="overlay"></div>

        <div className="ovw_container container-fluid">
          <div className="ovw_row">
            <div className="img_film">
              <img src={movie.hinhAnh} alt={movie.maPhim} />
              <Rate
                className="rating_in_mobile"
                allowHalf
                count={5}
                defaultValue={movie.danhGia / 2}
                disabled
              />
            </div>

            <div className="info_flim">
              {movie?.dangChieu ? (
                <span className="now_showing">Đang Chiếu</span>
              ) : movie?.sapChieu ? (
                <span className="coming_soon">Sắp Chiếu</span>
              ) : null}

              <p className="title_movie">{movie.tenPhim}</p>
              <p className="premiere_date">
                <span>Ngày khởi chiếu: </span>
                {moment(movie.ngayKhoiChieu).format("DD.MM.YYYY")}
              </p>
              <p className="des_movie">{movie.moTa}</p>

              {movie?.dangChieu ? (
                <a href="#showtime" className="buy_ticket btn btn-danger">
                  Mua Vé
                </a>
              ) : movie?.sapChieu ? (
                <button className="bg-secondary">
                  Hẹn bạn ngày khởi chiếu
                </button>
              ) : null}
            </div>
            <div className="rating_film">
              <div className="progress_film">
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#10e931",
                    "50%": "#e1e107",
                    "100%": "#ec0909",
                  }}
                  format={(percent) => (
                    <span className="progress_percent">{percent}%</span>
                  )}
                  percent={movie.danhGia * 10}
                />
              </div>
              <div className="rating-start">
                <Rate
                  className="start_desktop"
                  count={5}
                  defaultValue={movie.danhGia}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverTime;
