import { createContext, useReducer } from "react";
import { createAction } from "../utilities/reducer/reducer.utils";

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

const removeCartItem = (cartItems, productToDelete) => {
  return cartItems.filter(item => item.id !== productToDelete.id)
}

const increaseCartItem = (cartItems, productToIncrease) => {
  return cartItems.map(item => item.id === productToIncrease.id ? { ...item, quantity: item.quantity + 1 } : item)
}

const decreaseCartItem = (cartItems, productToDecrease) => {
  return cartItems.map(item => item.id === productToDecrease.id ? { ...item, quantity: item.quantity - 1 } : item)
}

//REDUX //

//YET AGAIN, I HAVE TO JUST COPY HIS BECUASE HIS LOGIC IS DIFFERENT

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
}

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      throw new Error('cartReducer action type not handled: ', type)
  }
}



//REDUX //


// actual value to access (I DON'T UNDERSTAND AT THIS POINT WHY CONTEXT IS STILL HERE)
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
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const { cartItems, isCartOpen, cartCount, cartTotal } = state

  // GENERIC STATE HANDLER FOR REDUCER MANIPULATION?? REDUCER HANDLERS
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

    const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)

    dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
      cartItems: newCartItems,
      cartTotal: newCartTotal,
      cartCount: newCartCount
    }
    ))
  }

  // const updateCartIsOpenReducer = (cartStatus) => {
  //   const newCartStatus = !cartStatus
  //   dispatch({
  //     type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
  //     payload: {
  //       isCartOpen: newCartStatus
  //     }
  //   })
  // }
  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
  }

  // CONTEXT METHODS CONTAINERS WRAPPING REDUCER METHODS TO PASS TO APP
  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const increaseItem = (productToIncrease) => {
    const newCartItems = increaseCartItem(cartItems, productToIncrease)
    updateCartItemsReducer(newCartItems)
  }

  const decreaseItem = (productToDecrease) => {
    const newCartItems = decreaseCartItem(cartItems, productToDecrease)
    updateCartItemsReducer(newCartItems)
  }


  //set state / context
  const value = {
    isCartOpen: isCartOpen,
    setIsCartOpen: setIsCartOpen,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
    increaseItem: increaseItem,
    decreaseItem: decreaseItem,
    cartItems: cartItems,
    cartCount: cartCount,
    cartTotal: cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
