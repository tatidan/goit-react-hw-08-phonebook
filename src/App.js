import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Suspense } from "react";
import { connect } from "react-redux";
import AppBar from "./components/AppBar";
import ContactsPage from "./pages/ContactsPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { mainRoutes } from "./routes/mainRoutes";
import { getCurrentUserOperation } from "./redux/auth";
import "./index.css";

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
              ({ path, exact, component, restricted, redirectTo }) => (
                <PublicRoute
                  path={path}
                  component={component}
                  restricted={restricted}
                  redirectTo={redirectTo}
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
          {/* <SignInSide /> */}
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = () => ({
  onGetCurrentUser: getCurrentUserOperation,
});

export default connect(mapDispatchToProps)(App);
