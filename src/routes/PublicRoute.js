import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { getIsAuthenticated } from "../redux/auth";

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuthenticated && routeProps.restricted ? (
        <Redirect to={redirectTo} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);
