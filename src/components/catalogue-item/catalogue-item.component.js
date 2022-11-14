import { useNavigate } from "react-router-dom";

import {
  CatalogueItemContainer,
  CatalogueItemBody,
  BackgroundImage
} from "./catalogue-item.styles"

const CatalogueItem = ({ id, title, imageURL, route }) => {
  const navigate = useNavigate()

  const handleNavigateClick = () => {
    navigate(route)
  }
  return (
    <CatalogueItemContainer onClick={handleNavigateClick}>
      <BackgroundImage
        imageURL={imageURL}
      />
      <CatalogueItemBody>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </CatalogueItemBody>
    </CatalogueItemContainer>
  );
};

export default CatalogueItem
