import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookI, InitialBooksState } from "../../types/types";
import { fetchBooks } from "./booksAPI";

const initialState: InitialBooksState = {
  loading: false,
  books: [],
  count: 0,
  error: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchBooks.fulfilled,
        (state, action: PayloadAction<{ books: BookI[]; count: number }>) => {
          state.loading = false;
          state.books = action.payload.books;
          state.count = action.payload.count;
          state.error = "";
        }
      )
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.books = [];
        state.count = 0;
        state.error = action.error.message || "Something went wrong!";
      });
  },
});

export default booksSlice.reducer;
