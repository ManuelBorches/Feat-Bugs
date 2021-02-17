import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NavBar from "../components/NavBar";
import { logOut } from "../redux/action-creators/usersAction";

const NavBarContainer = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user.id);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const seeTools = () => {
    history.push("/tools");
  };

  return <NavBar user={user} logOut={handleLogOut} seeTools={seeTools} />;
};

export default NavBarContainer;
