import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  Name,
} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  console.log(cartItem);
  return (
    <CartItemContainer>
      <CartItemImage src={imageURL} alt={`${name}`} />

      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">{quantity} x ${price}</span>
      </ItemDetails>

    </CartItemContainer>
  );
};

export default CartItem;
