// import React from "react";

// const FantasyMovieForm = (props) => {
//   return (
//       <h3>Placeholder for web form</h3>
//   );
// };

// export default FantasyMovieForm;


import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import MenuItem from "@material-ui/core/MenuItem";
import Snackbar from "@material-ui/core/Snackbar"; 
import MuiAlert from "@material-ui/lab/Alert";
import {useNavigate} from 'react-router-dom'


const genres = [
  {
    value: 5,
    label: "Drama",
  },
  {
    value: 4,
    label: "Comedy",
  },
  {
    value: 3,
    label: "Thriller",
  },
  {
    value: 2,
    label: "Animation",
  },
  {
    value: 0,
    label: "Kids",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: theme.spacing(2),
    },
  },
  textField: {
    width: "100ch",
  },
  submit: {
    marginRight: theme.spacing(2),
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
}));

const FantasyMovieForm = ({ movie }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(MoviesContext);
  const [rating, setRating] = useState(3);
  const [open, setOpen] = useState(false);  //NEW
  const navigate = useNavigate()

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSnackClose = (event) => {     
    setOpen(false);
    navigate("/");
  };

  const onSubmit = (fantasymovie) => {
    context.addFantasyMovie(movie, fantasymovie);
    setOpen(true);
  };

  return (
    <Box component="div" className={classes.root}>
      <Typography component="h1" variant="h3">
       Fantasy Movie
      </Typography>
   <br></br>
      <Typography component="h2" variant="h3">
        Create your Fantasy movie below
      </Typography>

      <Snackbar
        className={classes.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <MuiAlert
          severity="success"
          variant="filled"
          onClose={handleSnackClose}
        >
          <Typography variant="h4">
            Thank you for sharing your fantasy movie
          </Typography>
        </MuiAlert>
      </Snackbar>

      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          id="title"
          label="Fantasy movie name"
          name="title"
          autoFocus
          inputRef={register({ required: "Fantasy movie name required" })}
        />
        {errors.title && (
          <Typography variant="h6" component="p">
            {errors.title.message}
          </Typography>
        )}


<TextField
          id="select-rating"
          select
          variant="outlined"
          label="Select a Genre"
          value={rating}
          onChange={handleRatingChange}
          helperText="Remember to select a Genre"
        >
          {genres.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>


        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="overview"
          label="overview of fantasy movie story"
          id="overview"
          multiline
          minRows={5}
          inputRef={register({
            required: "No overview provided, please enter fantasy movie overview",
            minLength: { value: 10, message: "Overview is too short" },
          })}
        />
        {errors.overview && (
          <Typography variant="h6" component="p">
            {errors.overview.message}
          </Typography>
        )}
        

        <Box className={classes.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={() => {
              reset({
                title: "",
                overview: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default FantasyMovieForm;