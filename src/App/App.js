import React from "react";
import { Router, Route } from "react-router-dom";
import { history } from "../_helpers";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export { App };
