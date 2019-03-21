import _ from "lodash";
import {
  FETCH_FLASHCARD,
  FETCH_FLASHCARDS,
  CREATE_FLASHCARD,
  EDIT_FLASHCARD,
  DELETE_FLASHCARD
} from "../_constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FLASHCARDS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_FLASHCARD:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_FLASHCARD:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_FLASHCARD:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_FLASHCARD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
