import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <li>
      <div>
        <Link to={"/products/" + props.title}>
          <h3>{props.title}</h3>
        </Link>
      </div>
    </li>
  );
};

export default Product;
