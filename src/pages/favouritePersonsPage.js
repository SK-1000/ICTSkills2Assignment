import React from "react";
import PageTemplate from "../components/templatePersonListPage";

const FavouritePersonsPage = (props) => {
  const toDo = () => true;
  // Get peoples from local storage.
  const persons = JSON.parse(localStorage.getItem("favourites")); 

  return (
    <PageTemplate
      title="Favourite People"
      persons={persons}
      selectFavourite={toDo}
    />
  );
};

export default FavouritePersonsPage;