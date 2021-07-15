import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.product}>
      <p>#{props.product.id}</p>
      <h3>{props.product.name}</h3>
      <p>{props.product.brand}</p>
    </div>
  );
};
export default ProductItem;
