import React from "react";

import { useEffect, useState } from "react";
import getProducts from "../network/getProducts";
import ProductList from "../components/ProductList";

const ProductsCategory = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category, brand } = props.match.params;
  const order = new URLSearchParams(props.location.search).get("order");

  useEffect(() => {
    setIsLoading(true);
    getProducts(`/${category}`).then((res) => {
      setProducts(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    <div>
      <h1>Products</h1>
      <h2>Category:{category}</h2>
      <p>Loading...</p>
    </div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <h2>Category:{category}</h2>
      <h2>{brand ? `Brand: ${brand}` : null}</h2>
      <h2>{order ? `Order: ${order}` : null}</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ProductsCategory;
