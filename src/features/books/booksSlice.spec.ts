import { fetchBooks } from './booksSlice';
import { waitFor } from '@testing-library/react';
import booksReducer, {
    InitialBooksState,

} from './booksSlice';
import { store } from '../../app/store';

describe('books reducer', () => {
    const initialState: InitialBooksState = {
        loading: false,
        books: [],
        count: 0,
        error: '',
    };
    it('should handle initial state', () => {
        expect(booksReducer(undefined, { type: initialState })).toEqual({
            loading: false,
            books: [],
            count: 0,
            error: '',
        });
    });

    it('should return right book total count', async () => {
        // Dispatch the async action
        await store.dispatch(fetchBooks({ page: 1, itemsPerPage: 20, filters: [] }));
        // Wait for the state to update
        await waitFor(() => {
            const { loading } = store.getState().books;
            return !loading;
        });
        // Get the final state
        const actual = store.getState().books;
        // Check the state
        expect(actual.count).toEqual(2425);
    });

    it('should return the right number of items per page', async () => {
        const itemsPerPage = 20
        await store.dispatch(fetchBooks({ page: 1, itemsPerPage, filters: [] }));

        await waitFor(() => {
            const { loading } = store.getState().books;
            return !loading;
        });

        const actual = store.getState().books;
        expect(actual.books.length).toEqual(itemsPerPage);
    });

    it('should return the right page', async () => {
        const page = 1
        await store.dispatch(fetchBooks({ page, itemsPerPage: 20, filters: [] }));

        await waitFor(() => {
            const { loading } = store.getState().books;
            return !loading;
        });

        const actual = store.getState().books;
        expect(actual.books[0].id).toEqual(2086);
    });

});
