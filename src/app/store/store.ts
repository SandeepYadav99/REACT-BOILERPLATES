import { AnyAction, configureStore } from '@reduxjs/toolkit';
import { ThunkDispatch } from 'redux-thunk';
import authSlice from './auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
