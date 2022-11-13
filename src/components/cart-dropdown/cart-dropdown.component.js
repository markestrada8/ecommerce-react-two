import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const handleNavigateClick = () => {
    setIsCartOpen(!isCartOpen)
    navigate('/checkout')
  }


  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" >
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} quantity={item.quantity} />
        ))}

      </div>
      <Button onClick={handleNavigateClick}>

        CHECKOUT

      </Button>
    </div>
  );
};

export default CartDropdown;
