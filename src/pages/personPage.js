// import React, { useState, useEffect } from "react";
import React from "react";
import PageTemplate from '../components/templatePersonListPage'
import { getPersons } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import { useQuery } from 'react-query'


const PersonPage = (props) => {


  const {  data, error, isLoading, isError }  = useQuery('discoverperson', getPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;

  // These three lines are redundant; we will replace them laterg.
  const favourites = persons.filter(m => m.favouurite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  const addToFavourites = (personId) => true 



  // const [persons, setPersons] = useState([]);
  // const favourites = persons.filter(p => p.favourite)
  // localStorage.setItem('favourites', JSON.stringify(favourites))

  // const addToFavourites = (personId) => {
  //   const updatedPersons = persons.map((p) =>
  //     p.id === personId ? { ...p, favourite: true } : p
  //   );
  //   setPersons(updatedPersons);
  // };

  // useEffect(() => {
  //   getPersons().then(persons => {
  //     setPersons(persons);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <PageTemplate
      title='Discover People'
      
      persons={persons}
      selectFavourite={addToFavourites}
    />
  );
};
export default PersonPage;

