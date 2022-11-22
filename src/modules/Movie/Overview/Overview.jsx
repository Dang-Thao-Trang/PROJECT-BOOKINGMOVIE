import { useEffect, useState } from "react";

const Overview = ({ movieId }) => {
  const [movie, setMovies] = useState({});
  useEffect(() => {
    // gpị API và setMovie
  }, [movieId]);
  return <div>Overview</div>;
};

export default Overview;
