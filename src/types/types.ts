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
  error: string;
}

export interface PaginationProps {
  count: number;
  itemsPerPage: number;
  setSelectedPage: (selectedPage: number) => void;
  selectedPage: number;
}

export interface SearchProps {
  setSearchInput: (value: string) => void;
}
