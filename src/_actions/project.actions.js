import backEndApi  from '../_apis/backEndApi';
import { history } from "../_helpers";

import {
  CREATE_PROJECT,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  DELETE_PROJECT,
  EDIT_PROJECT
} from "../_constants";

export const createProject = formValues => async (dispatch, getState) => {
  const userId = getState().authentication.user.id;
  const response = await backEndApi.post("/projects", { ...formValues, userId });

  dispatch({ type: CREATE_PROJECT, payload: response.data });
  history.push("/projects");
};

export const fetchProjects = () => async dispatch => {
  const response = await backEndApi.get("/projects");

  dispatch({ type: FETCH_PROJECTS, payload: response.data });
};

export const fetchProject = id => async dispatch => {
  const response = await backEndApi.get(`/projects/${id}`);

  dispatch({ type: FETCH_PROJECT, payload: response.data });
};

export const editProject = (id, formValues) => async dispatch => {
  const response = await backEndApi.patch(`/projects/${id}`, formValues);

  dispatch({ type: EDIT_PROJECT, payload: response.data });
  history.push("/projects");
};

export const deleteProject = id => async dispatch => {
  await backEndApi.delete(`/projects/${id}`);

  dispatch({ type: DELETE_PROJECT, payload: id });
  history.push("/projects");
};
