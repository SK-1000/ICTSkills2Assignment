import React from "react"; 
import PersonHeader from "../headerPerson";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getPersonImages } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(7),
  },
  imageListRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplatePersonPage = ({ person, children }) => {
  const classes = useStyles();
  const { data , error, isLoading, isError } = useQuery(
    ["images", { id: person.id }],
    getPersonImages
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className={classes.root}>
      <PersonHeader person={person} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.imageListRoot}>
            <ImageList rowHeight={500} className={classes.gridList} cols={1}>
              
                <ImageListItem key={person.profile_path} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
                    alt={person.poster_path}
                  />
                </ImageListItem>
            
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplatePersonPage;



