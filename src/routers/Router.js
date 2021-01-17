import Login from "components/login/Login";
import Dashboard from "components/dashboard/Dashboard";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";


function AppRouter() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <PublicRoute path="/" exact>
            <Login />
          </PublicRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard/>
            </PrivateRoute>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default AppRouter;
