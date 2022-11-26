import React from "react";
import { useNavigate } from "react-router-dom";
import tickerAPI from "../../../services/tickerAPI";
import useRequest from "../../../Hooks/useRequest";
import moment from "moment";
import { Tabs } from "antd";
// import "./Showtime.css";
import "./Showtime.scss";

const ShowTime = ({ movieId }) => {
  const navigate = useNavigate();
  const { data: movieDetails } = useRequest(() =>
    tickerAPI.getMovieRapDetail(movieId)
  );

  if (movieDetails?.heThongRapChieu.length === 0) {
    return null;
  }

  const items = movieDetails?.heThongRapChieu.map((theater, index) => {
    return {
      label: (
        <div className="system_theater">
          <div className="theater_logo">
            <img src={theater.logo} alt={theater.maHeThongRap} />
          </div>
          <div className="theater_name">
            <p>{theater.tenHeThongRap}</p>
          </div>
        </div>
      ),
      key: index,
      className: "showing_time",
      children: theater.cumRapChieu?.map((complex) => {
        return (
          <div key={complex.maCumRap} className="showing_complex">
            <h1 className="showing_theater">{complex.tenCumRap}</h1>
            <div className="showing_date">
              {complex.lichChieuPhim?.map((dateTime) => {
                return (
                  <button
                    key={dateTime.maLichChieu}
                    onClick={() => navigate(`/ticket/${dateTime.maLichChieu}`)}
                  >
                    {moment(dateTime.ngayChieuGioChieu).format("L - hh:mm A")}
                  </button>
                );
              })}
            </div>
          </div>
        );
      }),
    };
  });

  return (
    <div id="showtime" className="showtime">
      <h3 className="bg-secondary text-info text-center pt-2">
        PHẦN BẠN ĐẶT VÉ
      </h3>
      <Tabs
        className="showtime_theater"
        defaultActiveKey="1"
        tabPosition="left"
        items={items}
      />
    </div>
  );
};

export default ShowTime;
