# reactjs-web-boilerplate

Boilerplate for React Redux Application

## Tech Stack

- Node - 14.17.2
- NPM - 7.24.2
- React - 17.0.2
- Redux - 4.1.0

## Key features

- React
- Redux
- Rest Services
- Routing
- Intl

## Use this template

- Clone this repo.
- Remove git folder with `rm -r .git`.
- Search and replace `reactjs-web-boilerplate` with your project name and update project name in index.html file.
- Search and replace `tokenName` with your token name.
- Initialize git using `git init`.

## Structure

```bash
.
├── .github
│   └── workflows
│       └── staging.yml
├── .gitignore
├── .prettierrc.json
├── .vscode
│   └── settings.json
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.js
    ├── app
    │   ├── components
    │   │   ├── loaders
    │   │   │   └── AppLoader.js
    │   │   ├── modals
    │   │   │   └── ErrorSucessModal.js
    │   │   ├── public
    │   │   │   ├── Icons.js
    │   │   │   ├── PublicFooter.js
    │   │   │   ├── PublicHeader.js
    │   │   │   └── ScrollToTop.js
    │   │   └── ui
    │   │       └── TextField.js
    │   ├── containers
    │   │   ├── auth
    │   │   │   ├── Login.js
    │   │   │   └── SignUp.js
    │   │   ├── client
    │   │   │   └── dashboard
    │   │   │       └── Dashboard.js
    │   │   ├── layout
    │   │   │   └── ClinetLayout.js
    │   │   └── public
    │   │       ├── Home.js
    │   │       └── PageNotFound.js
    │   ├── helpers
    │   │   ├── constants.js
    │   │   ├── history.js
    │   │   └── utils.helper.js
    │   ├── redux
    │   │   ├── actions
    │   │   │   ├── ErrorAction.js
    │   │   │   ├── LoaderActions.js
    │   │   │   └── UserActions.js
    │   │   ├── constant
    │   │   │   ├── error.constant.js
    │   │   │   ├── index.js
    │   │   │   ├── loader.constant.js
    │   │   │   └── user.constant.js
    │   │   ├── reducers
    │   │   │   ├── ErrorReducer.js
    │   │   │   ├── LoaderReducer.js
    │   │   │   ├── UserReducer.js
    │   │   │   └── index.js
    │   │   └── store.js
    │   └── services
    │       ├── apiEndpoint.js
    │       └── rest.service.js
    ├── assets
    │   ├── images
    │   └── styles
    ├── config.js
    ├── index.js
    ├── locales
    │   ├── en.js
    │   └── es.js
    ├── reportWebVitals.js
    ├── setupTests.js
    └── vendor.js
```

## Recommended Tools

- VSCode
  - Eslint
  - Prettier - Code formatter
  - Extension
    - Bracket Pair Colorizer
    - CSS Peek
    - Auto Close Tag
    - Better Comments
    - ESLint
    - GitLens — Git supercharged
    - glean
    - JavaScript (ES6) code snippets
    - Live Sass Compiler
    - Live Server
    - Path Intellisense
    - Prettier - Code formatter
    - Project Manager
    - Simple React Snippets
    - VSCode React Refactor
- Postman
