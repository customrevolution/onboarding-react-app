import ProductItem from "./ProductItem";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <div className={classes.list}>
      {props.products.map((product) => (
        <ProductItem
          className={classes.item}
          product={product}
          key={product.id}
        ></ProductItem>
      ))}
    </div>
  );
};
export default ProductList;
