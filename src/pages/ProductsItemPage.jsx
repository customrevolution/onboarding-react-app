import { useState, useEffect } from "react";
import getProducts from "../network/getProducts";

const ProductsItemPage = (props) => {
  const [product, setProduct] = useState([]);
  const category = "/" + props.match.params.category;
  const productId = "/" + props.match.params.productId;
  console.log(category, productId);

  useEffect(() => {
    getProducts(category, productId).then((product) => {
      setProduct(product);
    });
  }, []);

  return (
    <div>
      <h1>{product.category}</h1>
      <p>Name - {product.name}</p>
      <p>Brand - {product.brand}</p>
      <p>For - {product.for}</p>
      <p>Price - {product.price}</p>
    </div>
  );
};
export default ProductsItemPage;
