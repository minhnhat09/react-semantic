import _ from "lodash";
import {
  FETCH_FASTNOTE,
  FETCH_FASTNOTES,
  CREATE_FASTNOTE,
  EDIT_FASTNOTE,
  DELETE_FASTNOTE
} from "../_constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FASTNOTES:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_FASTNOTE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_FASTNOTE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_FASTNOTE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_FASTNOTE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
