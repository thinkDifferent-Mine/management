import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = JSON.parse(localStorage.getItem("isLogin"));
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
