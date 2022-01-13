import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { IntlProvider } from "react-intl";

import { Provider } from "react-redux";
import { Router } from "react-router-dom";
/* HELPERS */
import history from "./app/helpers/history";
/* COMPONENTS */
import App from "./App";
import ScrollToTop from "./app/components/public/ScrollToTop";
/* VENDOR */
import "./vendor";

// React-Redux store
import store from "./app/redux/store";
import en from "./locales/en";

const root = (
  <Provider store={store}>
    <IntlProvider messages={en} locale="en" defaultLocale="en">
      <Router history={history}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </Router>
    </IntlProvider>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(root, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
