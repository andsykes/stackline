import { configureStore } from "@reduxjs/toolkit";
import { productsAPI } from "../api/productsAPI";
import { setupListeners } from "@reduxjs/toolkit/query";
// ...

export const store = configureStore({
  reducer: { [productsAPI.reducerPath]: productsAPI.reducer },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
