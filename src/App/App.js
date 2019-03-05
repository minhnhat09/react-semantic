import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../_helpers";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";

import { LoginPage } from "../LoginPage";
import Header from "../_components/Header";
import BlogList from "../_components/Blog/BlogList";
import BlogCreate from "../_components/Blog/BlogCreate";
import BlogEdit from "../_components/Blog/BlogEdit";
import BlogDelete from "../_components/Blog/BlogDelete";
import BlogShow from "../_components/Blog/BlogShow";
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="ui container">
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute exact path="/blogs" component={BlogList} />
            <Route path="/blogs/new" exact component={BlogCreate} />
            <Route path="/blogs/edit/:id" exact component={BlogEdit} />
            <Route path="/blogs/delete/:id" exact component={BlogDelete} />
            <Route path="/blogs/:id" exact component={BlogShow} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App };
