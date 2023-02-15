import "./App.css";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { fetchBooks } from "./features/books/booksAPI";
import { searchBooks } from "./features/search/searchAPI";
import BookList from "./features/books/BookList";
import Paginate from "./features/pagination/Pagination";
import { Search } from "./features/search/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const books = useAppSelector((state) => state.books);
  const search = useAppSelector((state) => state.search);
  const count = useAppSelector((state) => state.books.count);
  const dispatch = useAppDispatch();

  const [selectedPage, setSelectedPage] = useState(getInitialPage);
  const [itemsPerPage] = useState(10);
  const [searchInput, setSearchInput] = useState("");

  function getInitialPage() {
    const storedPage = localStorage.getItem("selectedPage");
    return storedPage ? parseInt(storedPage) : 1;
  }

  useEffect(() => {
    localStorage.setItem("selectedPage", selectedPage.toString());
    dispatch(
      searchBooks({ filters: [{ type: "all", values: [searchInput] }] })
    );
    dispatch(
      fetchBooks({
        page: selectedPage,
        itemsPerPage: itemsPerPage,
        filters: [],
      })
    );
  }, [dispatch, selectedPage, itemsPerPage, searchInput]);

  return (
    <div className="App">
      <h1 className="title">Books Application</h1>
      <Search setSearchInput={setSearchInput} />
      <BookList
        books={(searchInput ? search.books : books.books).filter((book) =>
          book.book_title.toLowerCase().includes(searchInput)
        )}
        loading={books.loading}
        error={books.error}
        count={count}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Paginate
                count={count}
                itemsPerPage={itemsPerPage}
                setSelectedPage={setSelectedPage}
                selectedPage={selectedPage}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
