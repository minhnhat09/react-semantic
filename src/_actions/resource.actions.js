import resources from "../_apis/resources";
import { history } from "../_helpers";

import {
  CREATE_RESOURCE,
  FETCH_RESOURCES,
  FETCH_RESOURCE,
  DELETE_RESOURCE,
  EDIT_RESOURCE
} from "../_constants";

export const createResource = formValues => async (dispatch, getState) => {
  const userId = getState().authentication.user.id;
  const response = await resources.post("/resources", { ...formValues, userId });

  dispatch({ type: CREATE_RESOURCE, payload: response.data });
  history.push("/resources");
};

export const fetchResources = () => async dispatch => {
  const response = await resources.get("/resources");

  dispatch({ type: FETCH_RESOURCES, payload: response.data });
};

export const fetchResource = id => async dispatch => {
  const response = await resources.get(`/resources/${id}`);

  dispatch({ type: FETCH_RESOURCE, payload: response.data });
};

export const editResource = (id, formValues) => async dispatch => {
  const response = await resources.patch(`/resources/${id}`, formValues);

  dispatch({ type: EDIT_RESOURCE, payload: response.data });
  history.push("/resources");
};

export const deleteResource = id => async dispatch => {
  await resources.delete(`/resources/${id}`);

  dispatch({ type: DELETE_RESOURCE, payload: id });
  history.push("/resources");
};
