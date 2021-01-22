import Login from "components/login/Login";
import Dashboard from "components/dashboard/Dashboard";
<<<<<<< HEAD
import AllInfo from '../EmployeeManagement/AddEmployee/AllInfo';
import Approval from '../components/leaveManagement/Approval';
import Request from '../components/leaveManagement/Request';
=======
import AllInfo from '../components/EmployeeManagement/AddEmployee/AllInfo';
import EmployeeList from '../components/EmployeeManagement/statusofemployee/EmployeeList';
>>>>>>> a8f0d209353dfe3d1a37a03be4cab79d32cd687f
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
            <PrivateRoute path="/allinfo">
              <AllInfo />
            </PrivateRoute>
<<<<<<< HEAD
            <PrivateRoute path="/request">
              <Request />
            </PrivateRoute>
            <PrivateRoute path="/approval">
              <Approval />
=======
            <PrivateRoute path="/employeelist">
              <EmployeeList />
>>>>>>> a8f0d209353dfe3d1a37a03be4cab79d32cd687f
            </PrivateRoute>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default AppRouter;
