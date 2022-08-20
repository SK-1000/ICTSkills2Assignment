import React from "react";
import ImageListItem from "@material-ui/core/ImageListItem";

const PersonCredit =  ({ credit }) => {
  return (
    <>
      <p>Credit Title: {credit.title} </p>
      <p>Release Date: {credit.release_date} </p>
      <p>Overview: {credit.overview} </p>
      <p>Type of Media: {credit.media_type} </p>
      <p>Credit Image:</p>
      <ImageListItem key={credit.poster_path} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${credit.poster_path}`}
                    alt={credit.poster_path}
                  />
                </ImageListItem>
      
    </>
  );
};
export default PersonCredit