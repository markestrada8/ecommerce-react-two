import { createContext, useState } from "react";

// actual value to access
export const CartContext = createContext({
  cartIsOpen: null,
  setCartIsOpen: () => {},
});

//provider component (not sure why we set state when it's set above also...?)

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const value = { cartIsOpen, setCartIsOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
