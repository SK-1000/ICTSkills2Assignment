import React from "react";


const MovieVideo = ({ movieVideo }) => {
    const video = movieVideo.key
  return (
    <>
      <p>Similar Movie id: {movieVideo.id} </p>
      <p>Similar Movie title: {movieVideo.title} </p>
      <p>{movieVideo.type} </p>
      {/* <iframe
        width="1000"
        height="1000"
        src="https://www.youtube.com/embed/{movieVideo.key}"
      ></iframe> */}

<iframe width="560" height="315" src="https://www.youtube.com/embed/key" key="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
    </>
  );
};
export default MovieVideo;
