import { useHistory } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const history = useHistory();

  const showProductItemPage = () => {
    const category = props.product.category;
    const productId = props.product.id;
    const finalUrl = `/products/${category}/${productId}`;
    console.log("productitem final url --------");
    console.log(finalUrl);
    history.push(finalUrl);
  };
  return (
    <div className={classes.product} onClick={showProductItemPage}>
      <p>#{props.product.id}</p>
      <h3>{props.product.brand}</h3>
      <p className={classes.label}>{props.product.name}</p>
    </div>
  );
};
export default ProductItem;
