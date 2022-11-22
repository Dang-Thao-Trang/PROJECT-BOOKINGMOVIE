import React from "react";
import { useParams } from "react-router-dom";

import Overview from "./Overview";
import Showtimes from "./Showtime";

const Movie = () => {
  const { movieId } = useParams();

  return (
    <>
      <Overview movieId={movieId} />
      <Showtimes movieId={movieId} />
    </>
  );
};

export default Movie;
