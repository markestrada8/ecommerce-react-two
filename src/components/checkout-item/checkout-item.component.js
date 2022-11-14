import React from 'react'

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton
} from './checkout-item.styles'

const CheckoutItem = ({ item, removeItemFromCart, increaseItem, decreaseItem }) => {
  const { name, imageURL, price, quantity } = item

  const removeHandler = () => removeItemFromCart(item)
  const increaseHandler = () => increaseItem(item)
  const decreaseHandler = () => decreaseItem(item)


  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageURL} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        {quantity > 1 &&
          <Arrow onClick={decreaseHandler}>
            &#10094;
          </Arrow>}
        <Value>{quantity}</Value>
        <Arrow onClick={increaseHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>

    </CheckoutItemContainer>
  )
}

export default CheckoutItem
