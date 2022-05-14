import React from "react";
import CategoryItem from "../category-item/category-item";
import "./directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((item) => (
        <CategoryItem category={item} key={item.id} />
      ))}
    </div>
  );
};

export default Directory;
