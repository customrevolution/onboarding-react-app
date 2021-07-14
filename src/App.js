import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
// import Products from "./pages/Products";
// import ProductsCategory from "./pages/ProductsCategory";
import Nav from "./components/layout/Nav";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Nav></Nav>
      </Layout>
    </Router>
  );
}

export default App;
