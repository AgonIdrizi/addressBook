# Address Book

Address book is an application for searching users from randomuser.me/api

## Features

- Infinite scroll with intersection observer
- Loads batches of 50 users data when scroll is at the bottom of the page
- Searches users by first and last name
- Shows additional info of users with Modal dialog
- Users can save favourite nationalities, and their preference is persisted on page re-load
- Disable users-fetching when search is active
- Shows end of users catalog when we reach 1000 users

## Tech

Built with:

- [ReactJs](https://reactjs.org/) - A JavaScript library for building user interfaces!
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript at Any Scale.
- [Webpack](https://webpack.js.org/) - JavaScript module bundler
- [Sass](https://sass-lang.com/) - Sass: Syntactically Awesome Style Sheets.
- [React-Testing-Library](https://testing-library.com/) - React Testing Library, testing React components!

## INSTRUCTIONS

Start the application

```shell
git clone https://github.com/AgonIdrizi/addressBook.git
cd ./addressBook
npm install
npm run start
```

Run tests

```shell
npm run test
```
