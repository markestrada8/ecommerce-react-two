import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageURL } = product;
  const { addItemToCart } = useContext(CartContext);

  const addClickHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageURL} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addClickHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
