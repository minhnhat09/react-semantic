import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import blogs from "./blogs.reducer";
import projects from "./projects.reducer";
import { alert } from "./alert.reducer";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  blogs,
  projects,
  form: formReducer
});

export default rootReducer;
