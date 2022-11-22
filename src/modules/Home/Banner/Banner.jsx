import { useState, useEffect } from "react";
import movieAPI from "../../../services/movieAPI";
import "./style.scss";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// React Player {video trailer}
import ReactPlayer from "react-player";
import { AiOutlineClose, AiOutlinePlayCircle } from "react-icons/ai";

// ========================================
const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [video, setVideo] = useState("");
  const [playVideo, setPlayVideo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // IIFE function: khởi tạo và chạy ngay lập tức, không cần gọi
    (async () => {
      const data = await movieAPI.getBanners();
      setBanners(data);
    })();
  }, []);

  const TRAILERS = [
    "https://www.youtube.com/watch?v=uoKSzOuPcfY",
    "https://www.youtube.com/watch?v=kBY2k3G6LsM&t",
    "https://www.youtube.com/watch?v=QJHY4ggYCk4",
  ];
  const bannersMapped = banners?.map((banner, index) => {
    return { ...banner, trailer: TRAILERS[index] };
  });

  // Open Modal Video trailer
  const showModal = (trailer) => {
    setIsModalOpen(true);
    setVideo(trailer);
    setPlayVideo(true);
  };
  // close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setVideo("");
  };
  // =================reder =======================
  return (
    <div className="banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        navigation={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {bannersMapped.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.hinhAnh} alt={`banner-${item.maBanner}`} />
            <button
              className="banner-icon-play"
              onClick={() => showModal(item.trailer)}
            >
              <AiOutlinePlayCircle />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        style={{ display: isModalOpen ? "block" : "none" }}
        className="video"
      >
        <div className="video-overlay" onClick={closeModal}></div>
        <div className="video-modal">
          <div className="model-close" onClick={closeModal}>
            <button>
              <AiOutlineClose />
            </button>
          </div>
          <ReactPlayer playing={playVideo} controls url={video} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
