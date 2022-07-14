// import React, { useState, useEffect } from "react";
// import PageTemplate from '../components/templateMovieListPage'
// import { getUpcomingMovies } from "../api/tmdb-api";


// const UpComing = (props) => {
//   const [movies, setMovies] = useState([]);
//   const favourites = movies.filter(m => m.favourite)
//   localStorage.setItem('favourites', JSON.stringify(favourites))

//   // const addToFavourites = (movieId) => {
//   //   const updatedMovies = movies.map((m) =>
//   //     m.id === movieId ? { ...m, favourite: true } : m
//   //   );
//   //   setMovies(updatedMovies);
//   // };

// const addToFavourites = () => null;

//   useEffect(() => {
//     getUpcomingMovies().then(movies => {
//       setMovies(movies);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <PageTemplate
//       title='Upcoming Movies'
//       movies={movies}
//       selectFavourite={addToFavourites}
//     />
//   );
// };
// export default UpComing;



import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomingMovies } from '../api/tmdb-api'
// import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist'

const UpComing = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const upcomingMovies = data.results;

  // These three lines are redundant; we will replace them laterg.
  //  const favourites = movies.filter(m => m.favouurite)
  //  localStorage.setItem('favourites', JSON.stringify(favourites))
  //const addToFavourites = (movieId) => true 


  
  return (
    <PageTemplate
      title="Discover UpcomingMovies"
      movies={upcomingMovies}
      action={(movie) => {
        return <PlaylistAddIcon movie={movie} />
      }}
    />
);
};

export default UpComing;
