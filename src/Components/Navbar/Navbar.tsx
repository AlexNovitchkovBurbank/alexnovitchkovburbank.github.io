import { Link } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to={"/"}>Home</Link>
      <div id="page-navigation">
        <Link to="/codeStructureExamples">Code Structure</Link>
        <Link to="/folderStructureExamples">Project Formatting</Link>
      </div>
    </div>
  );
};

export default Navbar;
