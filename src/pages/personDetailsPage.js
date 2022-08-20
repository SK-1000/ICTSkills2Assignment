

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import PersonDetails from "../components/personDetails";
// import PageTemplate from "../components/templatePersonPage";
// import { getPerson } from "../api/tmdb-api";

// const PersonDetailsPage = (props) => {
//   const { id } = useParams();
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     getPerson(id).then((person) => {
//       setPerson(person);
//     });
//   }, [id]);

//   return (
//     <>
//       {person ? (
//         <>
//           <PageTemplate person={person}>
//             <PersonDetails person={person} />
//           </PageTemplate>
//         </>
//       ) : (
//         <p>Waiting for person details</p>
//       )}
//     </>
//   );
// };

// export default PersonDetailsPage;




import React from "react";
import { useParams } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import usePerson from "../hooks/usePerson";

const PersonDetailsPage = (props) => {
  const { id } = useParams();
  const [person] = usePerson(id);  // New

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for Person details</p>
      )}
    </>
  );
};

export default PersonDetailsPage;















// import React, {useState, useEffect}  from "react";
// import { useParams } from "react-router-dom";
// import PersonHeader from "../components/headerPerson/";
// import PersonDetails from "../components/personDetails/";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";
// import { getPerson, getPersonImages } from "../api/tmdb-api";


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
//   gridList: {
//     width: 450,
//     height: "100vh",
//   },
// }));

// const PersonPage = (props) => {
//   const classes = useStyles();
//   const { id } = useParams();
//   const [person, setPerson] = useState(null);
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     getPerson(id).then((person) => {
//       setPerson(person);
//     });
//   }, [id]);

//   useEffect(() => {
//     getPersonImages(id).then((images) => {
//       setImages(images);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


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

// export default PersonPage;