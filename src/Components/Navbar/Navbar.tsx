import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to={"/"}>Home</Link>
      <div id="page-navigation">
        <Link to="/projects">Projects</Link>
        <Link to="/folderStructure">Project formatting</Link>
      </div>
    </div>
  );
};

export default Navbar;
