import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavBarContainer from "./NavBarContainer";
import RegisterContainer from "./RegisterContainer";
import LogInContainer from "./LogInContainer";
import ToolsContainer from "./ToolsContainer";
import OrdersContainer from "./OrdersContainer";
import CreateOrderFormContainer from "./CreateOrderFormContainer";
import Home from "../components/Home";

import { isLogged } from "../redux/action-creators/usersAction";
//import style from "../assets/index.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLogged());
  }, []);

  return (
    <>
      <BrowserRouter>
        <NavBarContainer />
        <Switch>
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/login" component={LogInContainer} />
          <Route exact path="/tools" component={ToolsContainer} />
          <Route
            exact
            path="/tools/:id"
            render={({ match }) => <OrdersContainer toolId={match.params.id} />}
          />
          <Route
            exact
            path="/create/:id"
            render={({ match }) => (
              <CreateOrderFormContainer toolId={match.params.id} />
            )}
          />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
