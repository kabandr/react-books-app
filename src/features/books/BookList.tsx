import Book from './Book';
import { InitialBooksState } from './booksSlice';

import { styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, tableCellClasses} from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

export default function BookList({books, loading, error }: InitialBooksState) {
  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && error ? <div>Error: {error}</div> : null}
      {!loading && books.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Title</StyledTableCell>
                <StyledTableCell>Author</StyledTableCell>
                <StyledTableCell>Year</StyledTableCell>
                <StyledTableCell>City</StyledTableCell>
                <StyledTableCell>Country</StyledTableCell>
                <StyledTableCell>Pages</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map(book => (
                <Book
                  key={book.id} id={book.id} book_title={book.book_title} book_author={book.book_author} book_publication_year={book.book_publication_year} book_publication_country={book.book_publication_country} book_publication_city={book.book_publication_city} book_pages={book.book_pages}                />
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}