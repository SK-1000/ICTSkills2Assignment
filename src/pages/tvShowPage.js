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

  return (
    <PageTemplate
      title='Discover TV Shows'
      tvShows={tvShows}
      selectFavourite={addToFavourites}
    />
  );
};
export default TvListPage;







