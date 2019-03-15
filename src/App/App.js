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
import FastNoteList from "../_components/FastNote/FastNoteList";
import FlashCardList from "../_components/FlashCard/FlashCardList";
import ProjectList from "../_components/Project/ProjectList";
import ProjectCreate from "../_components/Project/ProjectCreate";
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div className="ui container">
          <Header />
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            {/* BLOGS */}
            <PrivateRoute exact path="/blogs" component={BlogList} />
            <PrivateRoute path="/blogs/new" exact component={BlogCreate} />
            <PrivateRoute path="/blogs/edit/:id" exact component={BlogEdit} />
            <PrivateRoute path="/blogs/delete/:id" exact component={BlogDelete} />
            <PrivateRoute path="/blogs/:id" exact component={BlogShow} />
            {/* FAST NOTES */}
            <PrivateRoute exact path="/fast-notes" component={FastNoteList} />
            {/* FLASH CARDS */}
            <PrivateRoute exact path="/flash-cards" component={FlashCardList} />
            {/* PROJECTS */}
            <PrivateRoute exact path="/projects" component={ProjectList} />
            <PrivateRoute path="/projects/new" exact component={ProjectCreate} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App };
