import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogIn from "../components/LogIn";

import { logIn, setLogInError } from "../redux/action-creators/usersAction";
import { getTools } from "../redux/action-creators/toolsAction"; //////////////////////////////////////////////////////////////

const LogInContainer = ({ history }) => {
  const dispatch = useDispatch();
  const logInError = useSelector((state) => state.users.logInError);
  const userOnLine = useSelector((state) => state.users.user.id);
  const [inputs, setInputs] = useState({}); // email = '', password = ''
  const [loader, setLoader] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  /* componentDidUpdate() {
    if (this.props.userId) this.props.history.push("/");
  } */
  useEffect(() => {
    if (userOnLine) history.push("/tools");
  }, [userOnLine]);

  useEffect(() => {
    if (logInError) {
      setLoader(false);
    }
  }, [logInError]);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    if (logInError) dispatch(setLogInError(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    dispatch(logIn(inputs));
    dispatch(getTools());
  };

  const handleClose = () => {
    setLoader(false);
    dispatch(setLogInError(false));
  };

  const openSnackbar = () => {
    if (logInError) setSnackbar(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway" || !logInError) return;
    setSnackbar(false);
  };

  return (
    <LogIn
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleClose={handleClose}
      openSnackbar={openSnackbar}
      closeSnackbar={closeSnackbar}
      inputs={inputs}
      loader={loader}
      logInError={logInError}
    />
  );
};

export default LogInContainer;
