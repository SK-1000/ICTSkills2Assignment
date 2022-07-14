import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
const [favourites, setFavourites] = useState([]);
const [myReviews, setMyReviews] = useState( {} ); 
const [myMustWatch, setMustWatch] = useState( [] )
  

  const addToFavourites = (movie) => {
    if (!favourites.includes(movie.id)) {
      let newFavourites = [...favourites, movie.id];
      setFavourites(newFavourites);
    }
  };

 
  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };



  const addToMustWatch = (movie) => {
    if (!myMustWatch.includes(movie.id)) {
     let newMustWatch = [...myMustWatch, movie.id];
     setMustWatch(newMustWatch);
     console.log(movie.id)
     console.log(newMustWatch)
    };
 
  };

  const removeFromMustWatch = (movie) => {
    setMustWatch(myMustWatch.filter((mId) => mId !== movie.id));
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };


  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addToMustWatch,
        removeFromMustWatch,
        addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;