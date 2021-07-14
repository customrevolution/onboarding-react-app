import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/products/food/best?order=priceAsc">Best Food Offer</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
