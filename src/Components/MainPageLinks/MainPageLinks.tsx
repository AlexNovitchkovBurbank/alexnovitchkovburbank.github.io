import { Link } from "react-router";
import "./MainPageLinks.css";

const MainPageLinks = () => {
  return (
    <div id="mainPageLinks">
      <div className="mainPageHeaderText">Folder structure</div>
      <div className="mainPageHeaderText">Code structure</div>
      <div className="mainPageHeaderText">Test structure</div>
      <Link to="/ts_js#ts_jsFolderStructure" className="mainPageLink">
        TS/JS
      </Link>
      <Link to="/ts_js#ts_jsCodeStructure" className="mainPageLink">
        TS/JS
      </Link>
      <Link to="/ts_js#ts_jsTestsStructure" className="mainPageLink">
        TS/JS
      </Link>
      <Link to="/csharp#csharpFolderStructure" className="mainPageLink">
        C#
      </Link>
      <Link to="/csharp#csharpCodeStructure" className="mainPageLink">
        C#
      </Link>
      <Link to="/csharp#csharpTestsStructure" className="mainPageLink">
        C#
      </Link>
    </div>
  );
};

export default MainPageLinks;
