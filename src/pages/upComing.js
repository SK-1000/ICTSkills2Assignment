import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import { getUpcomingMovies } from '../api/tmdb-api'
// import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
import AddToMustWatchIcon from '../components/cardIcons/addToMustWatch'

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
  const mustwatchs = upcomingMovies.filter(m => m.mustwatch)
  localStorage.setItem('mustwatchs', JSON.stringify(mustwatchs))
  //const addToFavourites = (movieId) => true 

  
  return (
    <PageTemplate
      title="Discover UpcomingMovies"
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToMustWatchIcon movie={movie} />
        
      }}
    />
    
);

};

export default UpComing;
