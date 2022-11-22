import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import movieAPI from "../../../services/movieAPI";

// thư viện
import ReactPlayer from "react-player";
import { HashLoader } from "react-spinners";
import { AiOutlineClose, AiOutlinePlayCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper";
import { Card, Button } from "react-bootstrap";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./Showing.scss";

const Showing = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [video, setVideo] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await movieAPI.getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleOpenModal = (trailer) => {
    setVideo(trailer);
    setOpenModal(true);
    setPlayVideo(true);
  };
  const handleCloseModal = () => {
    setVideo("");
    setOpenModal(false);
    setPlayVideo(false);
  };

  return (
    <div id="showing" className="showing">
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            grid: { rows: 1 },
          },
          579: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: { rows: 1 },
          },
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: { rows: 2 },
          },
          993: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: { rows: 2 },
          },
          1201: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: { rows: 2 },
          },
        }}
        navigation={true}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper"
      >
        {movies.map((item) => (
          <SwiperSlide key={item.maPhim}>
            <div className="film_item">
              <Card>
                <Card.Img variant="top" src={item.hinhAnh} alt={item.tenPhim} />
                <Card.Body>
                  <Card.Title>
                    {item.hot && <span className="movie_sub">HOT</span>}
                    {item.tenPhim}
                  </Card.Title>
                </Card.Body>
                <div className="overlay_info">
                  <p>
                    {item.moTa.length > 100
                      ? item.moTa.substring(0, 60) + "..."
                      : item.moTa}
                  </p>
                  <Button
                    className="detail"
                    variant="danger"
                    onClick={() => navigate(`/movie/${item.maPhim}`)}
                  >
                    Chi Tiết
                  </Button>
                  <Button
                    className="play_trailer"
                    variant="success"
                    onClick={() => handleOpenModal(item.trailer)}
                  >
                    <AiOutlinePlayCircle />
                  </Button>
                </div>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        style={{ display: openModal ? "block" : "none" }}
        className="showing-modal"
      >
        <div className="showing-overlay" onClick={handleCloseModal}></div>
        <div className="showing-video">
          <ReactPlayer playing={playVideo} url={video} controls />
          <button className="showing-close-modal" onClick={handleCloseModal}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50px",
        }}
      >
        <HashLoader
          style={{ margin: "0 auto", borderColor: "#fff", display: "none" }}
          loading={movies}
          size={30}
        />
      </div>
    </div>
  );
};

export default Showing;
