# React Books App

This application demonstrates how these features work in a React application:
    
- State management with modern Redux 
- Pagination
- Search 
- Class based component
- Unit testing 

# Usage

### Prerequisite

You need Node.js installed on your machine (ideally a recent version).

1. Clone the repo and change to the cloned repo:
    ```
    git clone https://github.com/kabandr/react-books-app
    cd react-books-app
    ```
2. Install packages

    ```
    yarn install
    ```
3. The the application
    ```
    yarn start
    ```

## TODO
 
- [x] ​Build a react web app that queries a paginated endpoint. 
- [x] Use Redux to save the results.
- [x] Display the results as a list on the UI.
- [x] Pagination (page number) should be reflected in the url (so when the page is refreshed, the same results are shown).
- [x] Write at least one component as a React class based component.
- [x] Write at least one unit test.
- [x] Add a search field to the app that upon request populates the ​filters​ post param as follows: `filters:[{type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"]}]`
- [x] Use Material-UI as a component library.
- [x] Add loading state
