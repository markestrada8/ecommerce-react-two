import React from 'react'

import './checkout-item.styles.scss'

const CheckoutItem = ({ item, removeItemFromCart, increaseItem, decreaseItem }) => {
  const { name, imageURL, price, quantity } = item

  const removeHandler = () => removeItemFromCart(item)
  const increaseHandler = () => increaseItem(item)
  const decreaseHandler = () => decreaseItem(item)


  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageURL} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        {quantity > 1 &&
          <span className="arrow" onClick={decreaseHandler}>
            &#10094;
          </span>}
        <span className='value'>{quantity}</span>
        <span className="arrow" onClick={increaseHandler}>
          &#10095;
        </span>
      </span>
      <span className='price'>{price}</span>
      <span onClick={removeHandler} className="remove-button">&#10005;</span>

    </div>
  )
}

export default CheckoutItem
