import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Register from "../components/Register";
import {
  postUser,
  setRegisterError,
} from "../redux/action-creators/usersAction";

const RegisterContainer = ({ history }) => {
  const dispatch = useDispatch();
  const registerError = useSelector((state) => state.users.registerError);
  //const [error, setError] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    if (registerError) dispatch(setRegisterError(false));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    dispatch(postUser(inputs));
    history.push("/login");
  };

  const openSnackbar = () => {
    if (registerError) setSnackbar(true);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === "clickaway" || !registerError) return;
    setSnackbar(false);
  };

  return (
    <Register
      inputs={inputs}
      //error={error}
      registerError={registerError}
      loader={loader}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      openSnackbar={openSnackbar}
      closeSnackbar={closeSnackbar}
    />
  );
};

export default RegisterContainer;
