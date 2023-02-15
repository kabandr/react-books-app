import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { BookI, InitialBooksState } from '../../types/types';
import { searchBooks } from './searchAPI';

const initialState: InitialBooksState = {
    loading: false,
    books: [],
    count: 0,
    error: '',
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchBooks.fulfilled, (state, action: PayloadAction<{ books: BookI[], count: number }>) => {
                state.loading = false;
                state.books = action.payload.books;
                state.count = action.payload.count;
                state.error = ""
            })
            .addCase(searchBooks.rejected, (state, action) => {
                state.loading = false;
                state.books = [];
                state.count = 0;
                state.error = action.error.message || "Something went wrong!"
            });
    },
});

export default searchSlice.reducer;
