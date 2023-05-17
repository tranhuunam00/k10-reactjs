import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlide";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import noticationsReducer from "../features/notifications/notificationsSlice";
import createSagaMiddleware from "redux-saga";
import postsSaga from "../features/posts/postsSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    notifications: noticationsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(postsSaga);
