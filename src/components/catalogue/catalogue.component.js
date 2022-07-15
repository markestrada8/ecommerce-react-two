import "./catalogue.styles.scss";
import CategoryItem from "../category-item/category-item.component";

import React from "react";

const Catalogue = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      // imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      imageUrl:
        "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Shoes",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Women's",
      // imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      imageUrl:
        "https://images.unsplash.com/photo-1565056215306-848a4e7ff992?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 5,
      title: "Men's",
      // imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      imageUrl:
        "https://images.unsplash.com/photo-1515205396030-348ce8a426cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className="catalogue">
      {categories.map((category) => {
        return <CategoryItem key={category.id} {...category} />;
      })}
    </div>
  );
};

export default Catalogue;
