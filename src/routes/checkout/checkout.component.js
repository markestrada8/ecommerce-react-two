import { useState } from "react"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context"

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from "./checkout.styles"

const Checkout = () => {
  const { removeItemFromCart, increaseItem, decreaseItem, cartItems } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
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
      <Total>
        Total: ${cartItems.reduce((total, item) => total + item.quantity * item.price, 0)}
      </Total>
    </CheckoutContainer>
  )
}

export default Checkout

