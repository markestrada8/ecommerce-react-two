import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const handleNavigateClick = () => {
    setIsCartOpen(!isCartOpen)
    navigate('/checkout')
  }


  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} quantity={item.quantity} />
          ))
        )
          : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )}
      </CartItems>
      <Button onClick={handleNavigateClick}>
        CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
