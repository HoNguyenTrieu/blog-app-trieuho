import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts); // saga đợi request trở về thành công và gán kq vào biến posts
    console.log("[posts]", posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data)); // put() trigger 1 action
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload); // saga đợi request trở về thành công và gán kq vào biến posts
    console.log("[createPostSaga - post]", post);
    yield put(actions.createPost.createPostSuccess(post.data)); // put() trigger 1 action
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga); // takeLatest nhận vào 2 tham số; tham số 1: có thể là 1 string (tên của action) hoặc là 1 function, tham số 2 là function để xử lý khi action này xảy ra
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

// generator function ES6 trong redux saga? tim hieu them

export default mySaga;
