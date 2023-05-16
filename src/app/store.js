import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlide";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
