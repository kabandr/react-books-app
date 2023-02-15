## How to run the application

### Prerequisite

- You need Node.js installed on your machine (ideally a recent version).
```
git clone https://github.com/kabandr/react-books-app
cd react-books-app

yarn install 
    or 
npm install
```

## Assessment Requirements
 
- [x] ​Using React, build a webapp that queries this paginated endpoint. Use Redux to save the results and then print out the results as a list on the page.
- [x] The app should be paginated with the pagination reflected in the url (so when the page is refreshed, the same results are shown).
- [x] Write at least one component as a React class based component (the rest can be functional components).
- [x] Write at least one unit test.
- [x] Host your code on Github, put all the code in a Pull Request against the (probably) empty repo.

## Optional

- [x] Add a search field to the app that upon request populates the ​filters​ post param as follows: filters:[{type: "all", values: ["YOUR_SEARCH_FIELD_CONTENTS"]}]
- [x] Use Material-UI as a component library.
- [x] Add loading state