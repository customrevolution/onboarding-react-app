import React, { useEffect } from "react";
import { useState } from "react";
import Product from "../components/Product";

import getProducts from "../network/getProducts";

const Products = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getProducts().then((res) => {
      setData(res);
    });
  }, []);

  if (!data) {
    return (
      <div>
        <h1>Products</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <Product title={product.title} key={product.key} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
