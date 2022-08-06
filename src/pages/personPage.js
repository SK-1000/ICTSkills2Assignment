
import React, { useState, useEffect } from "react";
import Header from "../components/headerPersonList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonList from "../components/personList";
import SortCard from "../components/filterPersonsCard";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px",
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const PersonListPage = (props) => {
  const classes = useStyles();
  const [persons, setPersons] = useState([]);
  const [nameSort, setNameSort] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);


  let displayedPersons = persons
    .sort((p) => {
      return p.name.toLowerCase().search(nameSort.toLowerCase()) !== -1;
    });
    

    const handleChange = (type, value) => {
      if (type === "name") setNameSort(value);
      else setNameSort(value);
    };
  

    const addToFavourites = (personId) => {
      const updatedPersons = persons.map((p) =>
        p.id === personId ? { ...p, favourite: true } : p
      );
      setPersons(updatedPersons);
    };





  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1`
      
    )
      .then((res) => res.json())
      .then((json) => {
         console.log(json);
        return json.results;
      })
      .then((persons) => {
        setPersons(persons);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Person Page"} />
      </Grid>
      <Grid item container spacing={5}>
      
        <PersonList persons={displayedPersons} selectFavourite={addToFavourites} />
      </Grid>
    </Grid>

    <Fab
    color="primary"
    
    variant="extended"
    onClick={() => setDrawerOpen(true)}
    className={classes.fab}
    >
    Sort People
    </Fab>

    <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <SortCard
              onUserInput={handleChange}
              nameSort={nameSort}
      
            />
          </Drawer>
        </>
        
      );
};
export default PersonListPage;