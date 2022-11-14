import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIconContainer />
      <ItemCount as='span'>{cartItems.length > 0 ?
        cartItems.reduce((total, { quantity }) => total + quantity, 0)
        : 0}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
