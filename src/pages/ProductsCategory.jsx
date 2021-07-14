import React from "react";

const ProductsCategory = (props) => {
  const { category, brand } = props.match.params;
  const order = new URLSearchParams(props.location.search).get("order");

  return (
    <div>
      <h1>Products</h1>
      <h2>Category:{category}</h2>
      <h2>{brand ? `Brand: ${brand}` : null}</h2>
      <h2>{order ? `Order: ${order}` : null}</h2>
    </div>
  );
};

export default ProductsCategory;
