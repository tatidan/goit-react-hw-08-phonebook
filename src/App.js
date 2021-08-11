import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Suspense } from "react";
import { connect } from "react-redux";
import { mainRoutes } from "./routes/mainRoutes";
import AppBar from "./components/AppBar";
import ContactsPage from "./pages/ContactsPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import "./index.css";

import { getCurrentUserOperation } from "./redux/auth";

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {mainRoutes.map(
              ({ path, exact, component, restricted, redirect }) => (
                <PublicRoute
                  path={path}
                  component={component}
                  restricted={restricted}
                  redirect={redirect}
                  exact={exact}
                  key={path}
                />
              )
            )}

            <PrivateRoute
              path="/contacts"
              exact
              component={ContactsPage}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = () => ({
  onGetCurrentUser: getCurrentUserOperation,
});

export default connect(mapDispatchToProps)(App);
