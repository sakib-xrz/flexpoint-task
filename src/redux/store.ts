import { configureStore } from "@reduxjs/toolkit";
import planReducer from "./features/plans/planSlice";

export const store = configureStore({
  reducer: {
    plans: planReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
