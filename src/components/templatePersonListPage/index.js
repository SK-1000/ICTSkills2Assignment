import React, { useState } from "react";
import Header from "../headerPersonList";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PersonList from "../personList";
import SortCard from "../filterPersonsCard";
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

const PersonListPageTemplate = ({ persons, title }) => {
  const classes = useStyles();
  const [nameSort, setNameSort] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);


  let displayedPersons = persons

    
    const handleChange = (type, value) => {
      if (type === "name") setNameSort(value);
      else setNameSort(value);
    };


  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <PersonList persons={displayedPersons} />
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
export default PersonListPageTemplate;