import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home</Link>
      <div id="page-navigation">
        <Link to="/ts_js">TS/JS</Link>
        {/*<Link to="/csharp">C#</Link>*/}
      </div>
    </div>
  );
};

export default Navbar;
