import React from "react";
import Movie from "../movieCard/";
import Grid from "@material-ui/core/Grid";

const TvList = (props) => {
  let tvCards = props.tvShows.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} />
    </Grid>
  ));
  return tvCards;
};

export default TvList;