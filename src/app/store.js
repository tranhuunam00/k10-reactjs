import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlide";
import postsReducer from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});
