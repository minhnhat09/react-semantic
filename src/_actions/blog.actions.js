import blogs from "../_apis/blogs";
import { history } from "../_helpers";

import {
  CREATE_BLOG,
  FETCH_BLOGS,
  FETCH_BLOG,
  DELETE_BLOG,
  EDIT_BLOG
} from "../_constants";

export const createBlog = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await blogs.post("/blogs", { ...formValues, userId });

  dispatch({ type: CREATE_BLOG, payload: response.data });
  history.push("/");
};

export const fetchBlogs = () => async dispatch => {
  const response = await blogs.get("/blogs");

  dispatch({ type: FETCH_BLOGS, payload: response.data });
};

export const fetchBlog = id => async dispatch => {
  const response = await blogs.get(`/blogs/${id}`);

  dispatch({ type: FETCH_BLOG, payload: response.data });
};

export const editBlog = (id, formValues) => async dispatch => {
  const response = await blogs.patch(`/blogs/${id}`, formValues);

  dispatch({ type: EDIT_BLOG, payload: response.data });
  history.push("/");
};

export const deleteBlog = id => async dispatch => {
  await blogs.delete(`/blogs/${id}`);

  dispatch({ type: DELETE_BLOG, payload: id });
  history.push("/");
};
