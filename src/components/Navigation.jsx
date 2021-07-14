import React from "react";
import { Link } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const handleChange = ({ target: { checked } }) => {
    if (checked) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <input type="checkbox" onChange={handleChange} />
          </li>

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
