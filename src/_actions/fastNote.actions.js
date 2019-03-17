import fastNotes from "../_apis/fastNotes";
import { history } from "../_helpers";

import {
  CREATE_FASTNOTE,
  FETCH_FASTNOTES,
  FETCH_FASTNOTE,
  DELETE_FASTNOTE,
  EDIT_FASTNOTE
} from "../_constants";

export const createFastNote = formValues => async (dispatch, getState) => {
  const userId = getState().authentication.user.id;
  const response = await fastNotes.post("/fastNotes", { ...formValues, userId });

  dispatch({ type: CREATE_FASTNOTE, payload: response.data });
  history.push("/flash-cards");
};

export const fetchFastNotes = () => async dispatch => {
  const response = await fastNotes.get("/fastNotes");

  dispatch({ type: FETCH_FASTNOTES, payload: response.data });
};

export const fetchFastNote = id => async dispatch => {
  const response = await fastNotes.get(`/fastNotes/${id}`);

  dispatch({ type: FETCH_FASTNOTE, payload: response.data });
};

export const editFastNote = (id, formValues) => async dispatch => {
  const response = await fastNotes.patch(`/fastNotes/${id}`, formValues);

  dispatch({ type: EDIT_FASTNOTE, payload: response.data });
  history.push("/fastNotes");
};

export const deleteFastNote = id => async dispatch => {
  await fastNotes.delete(`/fastNotes/${id}`);

  dispatch({ type: DELETE_FASTNOTE, payload: id });
  history.push("/fastNotes");
};
