import _ from "lodash";
import {
  FETCH_PROJECT,
  FETCH_PROJECTS,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT
} from "../_constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECT:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
