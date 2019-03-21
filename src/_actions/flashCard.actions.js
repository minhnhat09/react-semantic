import backEndApi  from '../_apis/backEndApi';
import { history } from "../_helpers";

import {
  CREATE_FLASHCARD,
  FETCH_FLASHCARDS,
  FETCH_FLASHCARD,
  DELETE_FLASHCARD,
  EDIT_FLASHCARD
} from "../_constants";

export const createFlashCard = formValues => async (dispatch, getState) => {
  const userId = getState().authentication.user.id;
  const response = await backEndApi.post("/flashCards", { ...formValues, userId });

  dispatch({ type: CREATE_FLASHCARD, payload: response.data });
  history.push("/flash-cards");
};

export const fetchFlashCards = () => async dispatch => {
  const response = await backEndApi.get("/flashCards");

  dispatch({ type: FETCH_FLASHCARDS, payload: response.data });
};

export const fetchFlashCard = id => async dispatch => {
  const response = await backEndApi.get(`/flashCards/${id}`);

  dispatch({ type: FETCH_FLASHCARD, payload: response.data });
};

export const editFlashCard = (id, formValues) => async dispatch => {
  const response = await backEndApi.patch(`/flashCards/${id}`, formValues);

  dispatch({ type: EDIT_FLASHCARD, payload: response.data });
  history.push("/flashCards");
};

export const deleteFlashCard = id => async dispatch => {
  await backEndApi.delete(`/flashCards/${id}`);

  dispatch({ type: DELETE_FLASHCARD, payload: id });
  history.push("/flashCards");
};
