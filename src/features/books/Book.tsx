import { Component } from 'react'
import { BookI } from './booksSlice';
import { styled, TableCell, TableRow, tableCellClasses } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 18,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default class Book extends Component<BookI> {
    render() {
        return (
            <StyledTableRow>
                <StyledTableCell>{this.props.id}</StyledTableCell>
                <StyledTableCell>{this.props.book_title}</StyledTableCell>
                <StyledTableCell>{this.props.book_author}</StyledTableCell>
                <StyledTableCell>{this.props.book_publication_year}</StyledTableCell>
                <StyledTableCell>{this.props.book_publication_city}</StyledTableCell>
                <StyledTableCell>{this.props.book_publication_country}</StyledTableCell>
                <StyledTableCell>{this.props.book_pages}</StyledTableCell>
            </StyledTableRow>
        )
    }
}