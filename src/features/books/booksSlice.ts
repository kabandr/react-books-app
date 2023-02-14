import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const BASE_URL = "http://nyx.vima.ekt.gr:3000/api/books"

export interface BookI {
    id: number;
    book_author: string[];
    book_title: string;
    book_publication_year: number;
    book_publication_country: string;
    book_publication_city: string;
    book_pages: number;
}

export interface InitialBooksState {
    loading: boolean;
    books: BookI[];
    count: number;
    error: string
}

const initialState: InitialBooksState = {
    loading: false,
    books: [],
    count: 0,
    error: '',
};

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (params: { page: number, itemsPerPage: number, filters: any[]}) => {
        const { page, itemsPerPage, filters } = params;
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                page,
                itemsPerPage,
                filters,
            })
        });
        const data = await response.json();
        return { books: data.books, count: data.count }
    }
);


export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<{ books: BookI[], count: number }>) => {
                state.loading = false;
                state.books = action.payload.books;
                state.count = action.payload.count;
                state.error = ""
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.books = [];
                state.count = 0;
                state.error = action.error.message || "Something went wrong!"
            });
    },
});

export default booksSlice.reducer;
