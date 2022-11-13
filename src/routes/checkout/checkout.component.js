import { useState } from "react"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss"

const Checkout = () => {
  const { removeItemFromCart, increaseItem, decreaseItem, cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems && cartItems.map((item) => {
        return (
          <CheckoutItem
            item={item}
            removeItemFromCart={removeItemFromCart}
            increaseItem={increaseItem}
            decreaseItem={decreaseItem}
            key={item.id}
          />
        )
      })}
      <span className="total">
        Total: ${cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
      </span>
    </div>
  )
}

export default Checkout