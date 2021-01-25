import Login from "components/login/Login";
// import Dashboard from "components/sidebar/Sidebar"
import AllInfo from '../components/EmployeeManagement/AddEmployee/AllInfo';
import Demo from '../components/workCalender/Demo';
import Approval from '../components/leaveManagement/Approval';
import Request from '../components/leaveManagement/Request';
import EmployeeList from '../components/EmployeeManagement/statusofemployee/EmployeeList';
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
            <PrivateRoute path="/allinfo">
              <AllInfo />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Demo />
            </PrivateRoute>
            <PrivateRoute path="/request">
              <Request />
            </PrivateRoute>
            <PrivateRoute path="/approval">
              <Approval />
            </PrivateRoute>
            <PrivateRoute path="/employeelist">
              <EmployeeList />
            </PrivateRoute>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default AppRouter;
