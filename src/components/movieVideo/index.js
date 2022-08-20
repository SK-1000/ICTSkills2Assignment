
import React from "react";


const MovieVideo = ({ movieVideo }) => {

    
  return (
    <>
      <p>Similar Movie id: {movieVideo.id} </p>
      <p>Similar Movie title: {movieVideo.title} </p>
      <p>{movieVideo.type} </p>


<iframe width="560" height="315" src="https://www.youtube.com/embed/{movieVideo.results[0].key}" key="video" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    
    </>
  );
};
export default MovieVideo;
