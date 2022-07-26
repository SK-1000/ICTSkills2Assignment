import React from "react";
import Person from "../personCard/";
import Grid from "@material-ui/core/Grid";

const PersonList = (props) => {
  let personCards = props.persons.map((p) => (
    <Grid key={p.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
   
      <Person key={p.id} person={p} selectFavourite={props.selectFavourite} />
    </Grid>
  ));
  return personCards;
};

export default PersonList;