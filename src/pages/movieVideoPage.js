import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieVideo from "../components/movieVideo";

const MovieVideoPage = (props) => {
  const { state : {movie, movieVideo } } = useLocation()
  return (
    <PageTemplate movie={movie}>
      <MovieVideo movieVideo={movieVideo} />
    </PageTemplate>
  );
};

export default MovieVideoPage;