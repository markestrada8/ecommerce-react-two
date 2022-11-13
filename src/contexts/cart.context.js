import { createContext, useState } from "react";

//pure function / not mutating for these
//set the array to return value for state setter
const addCartItem = (cartItems, productToAdd) => {
  if (cartItems.find((item) => item.id === productToAdd.id)) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }]
  }
}

const deleteCartItem = (cartItems, productToDelete) => {
  return cartItems.filter(item => item.id !== productToDelete.id)
}

const increaseQuantity = (cartItems, productToIncrease) => {
  return cartItems.map(item => item.id === productToIncrease.id ? { ...item, quantity: item.quantity + 1 } : item)
}

const decreaseQuantity = (cartItems, productToDecrease) => {
  return cartItems.map(item => item.id === productToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item)
}

// actual value to access
export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  increaseItem: () => { },
  decreaseItem: () => { },
});

//provider component (not sure why we set state when it's set above also...?)

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToDelete) => {
    setCartItems(deleteCartItem(cartItems, productToDelete))
  }

  const increaseItem = (productToIncrease) => {
    setCartItems(increaseQuantity(cartItems, productToIncrease))
  }

  const decreaseItem = (productToDecrease) => {
    setCartItems(decreaseQuantity(cartItems, productToDecrease))
  }

  //set state / context
  const value = {
    isCartOpen: isCartOpen,
    setIsCartOpen: setIsCartOpen,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
    increaseItem: increaseItem,
    decreaseItem: decreaseItem,
    cartItems: cartItems
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
