import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import style from "../assets/index.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "#242424",
      height: "80px",
      paddingTop: "10px",
    },
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = ({ user, logOut, seeTools }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div onClick={() => seeTools()} className={style.my_logo}>
              Feat &amp; Bugs
            </div>
          </Typography>
          {user ? (
            <Button
              onClick={logOut}
              component={Link}
              to="/login"
              color="inherit"
            >
              Log Out
            </Button>
          ) : (
            <>
              <Button component={Link} to="/register" color="inherit">
                Sign Up
              </Button>
              <Button component={Link} to="/login" color="inherit">
                Log In
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
