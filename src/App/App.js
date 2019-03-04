import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../_helpers";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";

import { LoginPage } from "../LoginPage";
import Header from "../_components/Header";
import BlogList from "../_components/Blog/BlogList";
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/blogs" component={BlogList} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App };
