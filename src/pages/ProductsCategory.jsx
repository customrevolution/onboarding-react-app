import React from "react";

import { useEffect, useState } from "react";
import getProducts from "../network/getProducts";
import ProductList from "../components/ProductList";
import classes from "./ProductsCategory.module.css";

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
      <h1 className={classes.header}>Products</h1>
      <p>Loading...</p>
    </div>;
  }

  return (
    <div>
      <h1 className={classes.header}>Products</h1>
      S
      <ProductList products={products} />
    </div>
  );
};

export default ProductsCategory;
