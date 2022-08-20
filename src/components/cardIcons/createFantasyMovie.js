import React from "react";
import CreateFantasyMovieIcon from "@material-ui/icons/PostAdd";
import { Link } from "react-router-dom";

const CreateDreamMovieIcon = ({ movie }) => {
  return (
    <Link
      to={'/fantasymovie/form'}
    >
      <CreateFantasyMovieIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default CreateDreamMovieIcon;