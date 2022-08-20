// import React, { useState, useEffect } from "react";
import React from "react";
import PageTemplate from '../components/templateTvListPage'
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getTvShows} from '../api/tmdb-api'

const TvListPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discovertv', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = tvShows.filter(m => m.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (tvshowId) => true 

//   const [tvShows, setTvShows] = useState([]);
//   const favourites = tvShows.filter(m => m.favourite)
//   localStorage.setItem('favourites', JSON.stringify(favourites))

//   const addToFavourites = (tvId) => {
//     const updatedTvShows = tvShows.map((m) =>
//       m.id === tvId ? { ...m, favourite: true } : m
//     );
//     setTvShows(updatedTvShows);
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         return json.results;
//       })
//       .then((tvShows) => {
//         setTvShows(tvShows);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

  return (
    <PageTemplate
      title='Discover TV Shows'
      tvShows={tvShows}
      selectFavourite={addToFavourites}
    />
  );
};
export default TvListPage;





// import React, { useState, useEffect } from "react";
// import Header from "../components/headerTvList";
// import FilterCard from "../components/filterTvShowsCard";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
// import TvList from "../components/tvList";
// import Fab from "@material-ui/core/Fab";
// import Drawer from "@material-ui/core/Drawer";

// const useStyles = makeStyles((theme) =>  ({
//   root: {
//     padding: "20px",
//   },
//   fab: {
//     marginTop: theme.spacing(8),
//     position: "fixed",
//     top: theme.spacing(2),
//     right: theme.spacing(2),
//   },
// }));

// const TvListPage = (props) => {
//   const classes = useStyles();
//   const [tvShows, setTvShows] = useState([]);
//   const [titleFilter, setTitleFilter] = useState("");
//   const [genreFilter, setGenreFilter] = useState("0");
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const genreId = Number(genreFilter);

//   let displayedTvShows = tvShows
//     .filter((m) => {
//       return m.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
//     })
//     .filter((m) => {
//       return genreId > 0 ? m.genre_ids.includes(genreId) : true;
//     });

//   const handleChange = (type, value) => {
//     if (type === "title") setTitleFilter(value);
//     else setGenreFilter(value);
//   };

//   const addToFavourites = (tvId) => {
//     const updatedTvShows = tvShows.map((m) =>
//       m.id === tvId ? { ...m, favourite: true } : m
//     );
//     setTvShows(updatedTvShows);
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//        console.log(json);
//         return json.results;
//       })
//       .then((tvShows) => {
//         setTvShows(tvShows);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <>
//     <Grid container className={classes.root}>
//       <Grid item xs={12}>
//         <Header title={"TV Show Page"} />
//       </Grid>
//       <Grid item container spacing={5}>
//         {/* <TvList tvShows={displayedTvShows}></TvList> */}
//         <TvList tvShows={displayedTvShows} selectFavourite={addToFavourites} />
//       </Grid>
//     </Grid>
//     <Fab
//         color="secondary"
//         variant="extended"
//         onClick={() => setDrawerOpen(true)}
//         className={classes.fab}
//       >
//         Filter
//       </Fab>
//       <Drawer
//         anchor="left"
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//       >
//         <FilterCard
//           onUserInput={handleChange}
//           titleFilter={titleFilter}
//           genreFilter={genreFilter}
//         />
//       </Drawer>
//     </>
//   );
// };
// export default TvListPage;













// import React, { useState, useEffect } from "react";  // Changed
// import Header from "../components/headerTvList";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
// import TvList from "../components/tvList";

// const useStyles = makeStyles({
//   root: {
//     padding: "20px",
//   },
// });

// const TvListPage = (props) => {
//   const classes = useStyles();
//   const [tvShows, setTvShows] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&page=1`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         return json.results;
//       })
//       .then((tvShows) => {
//         setTvShows(tvShows);
//       });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <Grid container className={classes.root}>
//       <Grid item xs={12}>
//         <Header title={"TV Show Page"} />
//       </Grid>
//       <Grid item container spacing={5}>
//         <TvList tvShows={tvShows}></TvList>
//       </Grid>
//     </Grid>
//   );
// };
// export default TvListPage;