import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import { mainRoutes } from "./routes/mainRoutes";
import "./index.css";
import AppBar from "./components/UserMenu/AppBar";

class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {mainRoutes.map(({ path, exact, component }) => (
              <Route
                path={path}
                component={component}
                exact={exact}
                key={path}
              />
            ))}
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
