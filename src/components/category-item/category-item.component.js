import "./category-item.styles.scss";

const CategoryItem = ({ id, title, imageUrl }) => {
  // const { id, title, imageUrl } = props.categoryItem;
  return (
    <div key={id} className="category-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
