import React, {useState, useEffect}  from "react";
// import { useParams } from "react-router-dom";
import PersonHeader from "../headerPerson/";
// import PersonDetails from "../personDetails/";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
// import { getPerson, getPersonImages } from "../api/tmdb-api";
import { getPersonImages } from "../../api/tmdb-api";
// import ImageList from "@material-ui/core/ImageList";
// import ImageListItem from "@material-ui/core/ImageListItem";
import Fab from "@material-ui/core/Fab";

import PersonList from "../personList";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    width: 450,
    height: "100vh",
  },
}));

const TemplatePersonPage = ({ person, children }) => {
  const classes = useStyles();
//   const { id } = useParams();
//   const [person, setPerson] = useState(null);
  const [images, setImages] = useState([]);






  useEffect(() => {
    getPersonImages(person.id).then((images) => {
      setImages(images);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


//   return (
//     <>
//       {person ? (
//         <>
//           <PersonHeader person={person} />
//           <Grid container spacing={5} style={{ padding: "15px" }}>
//             <Grid item xs={3}>
//               <div className={classes.root}>
               
//               </div>
//             </Grid>
//             <Grid item xs={9}>
//               <PersonDetails person={person} />
//             </Grid>
//           </Grid>
//         </>
//       ) : (
//         <h2>Waiting for API data</h2>
//       )}
//     </>
//   );
// };


return (
    <>
      <PersonHeader person={person} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.imageListRoot}>
            {/* <ImageList rowHeight={500} className={classes.gridList} cols={1}>
              {images.map((image) => (
                <ImageListItem key={image.file_path} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </ImageListItem>
              ))}
            </ImageList> */}
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
 

    </>
  );
};

export default TemplatePersonPage;