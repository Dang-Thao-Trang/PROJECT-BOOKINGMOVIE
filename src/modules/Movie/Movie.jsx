import React from "react";
import { useParams } from "react-router-dom";
import Overview from "./Overview";
import Showtimes from "./Showtime";
import "./Movie.scss";

const Movie = () => {
  const { movieId } = useParams();

  return (
    <div className="movie">
      <Overview movieId={movieId} />
      <Showtimes movieId={movieId} />
    </div>
  );
};

export default Movie;
