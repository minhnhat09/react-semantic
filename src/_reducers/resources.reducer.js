import _ from "lodash";
import {
  FETCH_RESOURCE,
  FETCH_RESOURCES,
  CREATE_RESOURCE,
  EDIT_RESOURCE,
  DELETE_RESOURCE
} from "../_constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RESOURCES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_RESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_RESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_RESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RESOURCE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
