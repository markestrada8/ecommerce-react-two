import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

import {
  ProductCardContainer,
  Footer,
  Name,
  Price
} from "./product-card.styles"

const ProductCard = ({ product }) => {
  const { name, price, imageURL } = product
  const { addItemToCart } = useContext(CartContext)

  const addClickHandler = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageURL} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addClickHandler}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
