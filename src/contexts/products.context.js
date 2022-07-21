import { createContext, useState, useEffect } from "react";
// import {
//   onAuthStateChangedListener,
//   createUserDocumentFromAuth,
// } from "../utilities/firebase/firebase.utils";
import PRODUCTS from "../shop-data.json";

// actual value to access
export const ProductsContext = createContext({
  products: [],
});

//provider component (not sure why we set state when it's set above also...?)

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS)
  const value = {products}

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
