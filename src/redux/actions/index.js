import { createActions, createAction } from "redux-actions";

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  // với 1 action trong việc call API luôn có 3 actions cho hành động đó
  getPostsRequest: undefined, // gửi request
  getPostsSuccess: (payload) => payload, // khi success
  getPostsFailure: (err) => err, // khi có lỗi xảy ra
});

export const createPost = createActions({
  // với 1 action trong việc call API luôn có 3 actions cho hành động đó
  createPostRequest: (payload) => payload,
  createPostSuccess: (payload) => payload, // khi success
  createPostFailure: (err) => err, // khi có lỗi xảy ra
});

export const updatePost = createActions({
  updatePostRequest: (payload) => payload,
  updatePostSuccess: (payload) => payload,
  updatePostFailure: (err) => err,
});

export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");
