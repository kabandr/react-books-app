import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import booksReducer from '../features/books/booksSlice';
import searchSlice from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
