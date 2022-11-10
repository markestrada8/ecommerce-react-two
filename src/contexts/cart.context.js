import { createContext, useState } from "react";

//pure function / not mutating for these
//set the array to return value for state setter
const addCartItem = (cartItems, productToAdd) => {
  if (cartItems.find((item) => item.id === productToAdd.id)) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quanity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

// actual value to access
export const CartContext = createContext({
  cartIsOpen: null,
  setCartIsOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
});

//provider component (not sure why we set state when it's set above also...?)

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  //set state / context
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    cartIsOpen: cartIsOpen,
    setCartIsOpen: setCartIsOpen,
    addItemToCart: addItemToCart,
    cartItems: cartItems
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
