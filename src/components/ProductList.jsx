import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <div>
      {props.products.map((product) => (
        <ProductItem product={product} key={product.id}></ProductItem>
      ))}
    </div>
  );
};
export default ProductList;
