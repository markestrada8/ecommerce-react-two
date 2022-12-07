import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { Provider } from "react-redux"
import { store } from "./store/store";

import { CategoriesProvider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        {/* <CategoriesProvider> */}
        <CartProvider>
          <App />
        </CartProvider>
        {/* </CategoriesProvider> */}

      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
