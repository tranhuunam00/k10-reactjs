import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlide";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import noticationsReducer from "../features/notifications/notificationsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    notifications: noticationsReducer,
  },
});
