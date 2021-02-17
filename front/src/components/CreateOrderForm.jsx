import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FiberNewIcon from "@material-ui/icons/FiberNew";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link to="#">Feat &amp; Bugs</Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.warning.dark,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    "& .MuiSelect-select": {
      minWidth: "350px",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreateOrderForm = ({
  handleChange,
  handleOrderType,
  handleSubmit,
  inputs,
  userId,
}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FiberNewIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          New Order
        </Typography>
        <form
          onSubmit={(event) => handleSubmit(event, userId)}
          className={classes.form}
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Title"
                autoFocus
                onChange={handleChange}
                value={inputs.title}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="description"
                label="Description"
                type="description"
                id="description"
                autoComplete="description"
                onChange={handleChange}
                value={inputs.description}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="image"
                label="Image"
                id="image"
                onChange={handleChange}
                value={inputs.image}
              />
            </Grid>

            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">Type</InputLabel>
              <Select native label="Type">
                <option
                  onClick={() => handleOrderType("")}
                  aria-label="Select type"
                  value=""
                />

                <option
                  onClick={() => handleOrderType("feature")}
                  value="feature"
                >
                  feature
                </option>
                <option onClick={() => handleOrderType("bug")} value="bug">
                  bug
                </option>
              </Select>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              disabled={!inputs.title}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add!
            </Button>
          </Grid>

          <Grid container justify="center"></Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default CreateOrderForm;
