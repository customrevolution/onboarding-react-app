import Navigation from "../Navigation";
import Nav from "./Nav";

function Layout(props) {
  return (
    <div>
      <Navigation />
      <Nav></Nav>
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
