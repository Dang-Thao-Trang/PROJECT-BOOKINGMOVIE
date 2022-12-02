import React from "react";
import Banner from "./Banner";

import MovieBox from "./MovieBox/MovieBox";
import Showing from "./Showing";

const Home = () => {
  return (
    <div>
      <Banner />

      <Showing />

      <MovieBox />
    </div>
  );
};

export default Home;
