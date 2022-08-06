import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(10),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterPersonsCard(props) {
  const classes = useStyles();

  const knownfors = [
    {id: 1, title: "Annie"},
    {id: 2, title: "Big Daddies house"},
    {id: 3, title: "The Devils Advocate"}
  ]

  const handleChange = (e, type, value) => {
    e.preventDefault()
    props.onUserInput(type, value)   // NEW
  }

  const handleNameChange = e => {
    handleChange(e, "name", e.target.value)
  };

  return (
    <>
    <Card className={classes.root} variant="outlined">
      {/* <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter People.
        </Typography>
        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="knownfor-label">Known For:</InputLabel>
          <Select
            labelId="knownfor-label"
            id="knownfor-select"
          >
            {knownfors.map((knownfor) => {
              return (
                <MenuItem key={knownfor.id} value={knownfor.id}>
                  {knownfor.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent> */}
    </Card>
    <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort People by.
          </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="sort-label">Sort by this selection:</InputLabel>
          <Select
            labelId="sort-label"
            id="sort-select"
            value={props.nameSort}
            onChange={handleNameChange}
          >
            {knownfors.map((sort) => {
              return (
                <MenuItem key={sort.id} value={sort.id}>
                  {sort.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        </CardContent>
      </Card>
      </>
  );
}