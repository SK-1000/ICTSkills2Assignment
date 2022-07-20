import React from "react";
import Header from "../components/headerMovieList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TvList from "../components/tvList";

const useStyles = makeStyles({
  root: {
    padding: "20px",
  },
});

const TvListPage = (props) => {
  const classes = useStyles();
  const tvShows = props.tvShows;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"TV Show Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <TvList tvShowss={tvShows}></TvList>
      </Grid>
    </Grid>
  );
};
export default TvListPage;