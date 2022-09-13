import { configureStore } from "@reduxjs/toolkit";
import { ApiDataReduser } from "./Reducers/Reducer";

const store = configureStore({
  reducer: {
    custom: ApiDataReduser,
  },
});

export default store;
