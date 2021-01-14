import Login from "components/login/Login";
import Dashboard from "components/dashboard/Dashboard";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function AppRouter() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
            </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default AppRouter;
