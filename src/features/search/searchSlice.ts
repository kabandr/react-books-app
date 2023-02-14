import { createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

const BASE_URL = "http://nyx.vima.ekt.gr:3000/api/books"

interface Book {
    id: number;
    book_author: string[];
    book_title: string;
    book_publication_year: number;
    book_publication_country: string;
    book_publication_city: string;
    book_pages: number;
}
interface InitialState {
    loading: boolean;
    books: Book[];
    count: number;
    error: string
}

const initialState: InitialState = {
    loading: false,
    books: [],
    count: 0,
    error: '',
};

export const searchBooks = createAsyncThunk(
    'books/searchBooks',
    async (params: {filters: any[]}) => {
        const {filters } = params;
        const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                filters
            })
        });
        const data = await response.json();
        return { books: data.books, count: data.count }
    }
);


export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchBooks.fulfilled, (state, action: PayloadAction<{ books: Book[], count: number }>) => {
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
