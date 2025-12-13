import { formatting } from "../../assets/folderStructure.json";
import Format from "../../Components/FormatCard/Format";
import Navbar from "../../Components/Navbar/Navbar";
import "./FolderStructureExamplesPage.css"

const FolderStructurePage = () => {
  return (
    <>
      <Navbar />
      <div id="folderStructureExamplesSection">
        {formatting.unitTest.map((testFormat, i) => (
          <Format
            key={i}
            title={testFormat.title}
            folderStructureUrl={testFormat.testFolderStructureUrl}
            whyThisWay={testFormat.whyThisWay}
          />
        ))}
      </div>
    </>
  );
};

export default FolderStructurePage;
