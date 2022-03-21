import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { pokemonApi } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query/react";

export default configureStore({
  reducer: {
    todos: todoReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

//setupListeners(store.dispatch);