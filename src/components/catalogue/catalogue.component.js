import CatalogueItem from "../catalogue-item/catalogue-item.component";


import { CatalogueContainer } from "./catalogue.styles"

const categories = [
  {
    id: 1,
    title: "Hats",
    route: "shop/hats",
    // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    imageURL:
      "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 2,
    title: "Jackets",
    route: "shop/jackets",
    imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "Shoes",
    route: "shop/shoes",
    imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "Women's",
    route: "shop/womens",
    // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    imageURL:
      "https://images.unsplash.com/photo-1565056215306-848a4e7ff992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 5,
    title: "Men's",
    route: "shop/mens",
    // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    imageURL:
      "https://images.unsplash.com/photo-1515205396030-348ce8a426cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const Catalogue = () => {

  return (
    <CatalogueContainer>
      {categories.map((category) => {
        return <CatalogueItem key={category.id} {...category} />;
      })}
    </CatalogueContainer>
  );
};

export default Catalogue;
