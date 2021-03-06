import _ from "lodash";
import {
  FETCH_BLOG,
  FETCH_BLOGS,
  CREATE_BLOG,
  EDIT_BLOG,
  DELETE_BLOG
} from "../_constants";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_BLOG:
      return { ...state, [action.payload._id]: action.payload };
    case CREATE_BLOG:
      return { ...state, [action.payload._id]: action.payload };
    case EDIT_BLOG:
      return { ...state, [action.payload._id]: action.payload };
    case DELETE_BLOG:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
