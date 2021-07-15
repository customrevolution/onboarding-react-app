import { Route, Switch } from "react-router-dom";

import About from "../../pages/About";
import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Products from "../../pages/Products";
import ProductsCategory from "../../pages/ProductsCategory";

function Nav() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} exact />
      <Route path="/products/:category/:brand?" component={ProductsCategory} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Nav;
