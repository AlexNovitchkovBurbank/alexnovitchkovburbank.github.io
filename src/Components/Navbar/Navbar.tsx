import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/" className="navLink">Home</Link>
      <div id="page-navigation">
        <Link to="/ts_js" className="navLink">TS/JS</Link>
        <Link to="/csharp" className="navLink">C#</Link>
        <Link to="/concepts" className="navLink">Concepts</Link>
      </div>
    </div>
  );
};

export default Navbar;
