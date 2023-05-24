import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000/api/books"

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