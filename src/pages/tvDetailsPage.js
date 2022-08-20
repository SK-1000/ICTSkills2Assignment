import React, {useState, useEffect}  from "react";
import { useParams } from "react-router-dom";
import TvDetails from "../components/tvDetails";
import { getTv} from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import TvHeader from "../components/headerTv";


const useStyles = makeStyles({
    root: {
      padding: "60px",
    },
  });

const TvDetailsPage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const { data: tv, error, isLoading, isError } = useQuery(
    ["tv", { id: id }],
    getTv
  );
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.posters)
      .then((images) => {
      //   console,log(images)
        setImages(images);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
    
    return (
        <>
          {tv ? (
            <>
              <TvHeader tv={tv} />
              <Grid container spacing={5} style={{ padding: "15px" }}>
                <Grid item xs={3}>
                  <div className={classes.root}>
                    <ImageList
                      rowHeight={500}
                      className={classes.gridList}
                      cols={1}
                    >
                      {images.map((image) => (
                        <ImageListItem
                          key={image.file_path}
                          className={classes.gridListTile}
                          cols={1}
                        >
                         <img
                          src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                          alt={image.file_path}
                         />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </div>
                </Grid>
                <Grid item xs={9}>
                  <TvDetails tv={tv} />
                </Grid>
              </Grid>
            </>
          ) : (
            <h2>Waiting for API data</h2>
          )}
        </>
      );
    };

export default TvDetailsPage;