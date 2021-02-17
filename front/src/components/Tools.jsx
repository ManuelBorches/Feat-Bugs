import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";
import DeleteIcon from "@material-ui/icons/Delete";
import style from "../assets/index.module.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    minWidth: 275,
    margin: "20px 0",
    "&:hover": {
      backgroundColor: "rgb(220, 220, 220)",
      boxShadow: "0px 16px 30px 0px rgba(0, 0, 0, 0.19)",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "5px 2px",
    transform: "scale(0.8)",
  },
});

const Tools = ({
  tools,
  user,
  enableEditing,
  adding,
  toolName,
  handleChange,
  handleSubmit,
  handleDelete,
}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      {tools &&
        tools.map((el, index) => (
          <Card key={index} className={classes.root} variant="outlined">
            <CardContent>
              <div className={style.align}>
                <Link to={`/tools/${el.id}`} className={style.tools}>
                  <Typography variant="h5" component="h2">
                    {bull}
                    {el.name.toUpperCase()}
                    {bull}
                  </Typography>
                </Link>
                {user.userType === "owner" ? (
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(el.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}

      {user.userType === "owner" ? (
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {adding ? (
                <div className={classes.align}>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                      id="standard-basic"
                      label="Standard"
                      value={toolName}
                      onChange={handleChange}
                    />
                  </form>

                  <IconButton
                    edge="end"
                    aria-label="submit"
                    onClick={handleSubmit}
                  >
                    <CheckIcon />
                  </IconButton>
                </div>
              ) : (
                <IconButton onClick={enableEditing}>
                  <AddIcon fontSize="large" />
                </IconButton>
              )}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
};
export default Tools;
