import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCount
} from "./cart-icon.styles";

const CartIcon = () => {
  const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext);

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIconContainer />
      <ItemCount as='span'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
