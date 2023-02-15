import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://nyx.vima.ekt.gr:3000/api/books";

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async (params: { page: number; itemsPerPage: number; filters: any[] }) => {
      const { page, itemsPerPage, filters } = params;
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page,
          itemsPerPage,
          filters,
        }),
      });
      const data = await response.json();
      return { books: data.books, count: data.count };
    }
  );