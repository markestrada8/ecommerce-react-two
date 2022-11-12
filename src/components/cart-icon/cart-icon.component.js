import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const handleClick = () => {
    setIsCartOpen(!isCartOpen);
  }


  console.log(cartItems)
  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItems.length > 0 ?
        cartItems.reduce((total, { quantity }) => total + quantity, 0)
        : 0}</span>
    </div>
  );
};

export default CartIcon;
