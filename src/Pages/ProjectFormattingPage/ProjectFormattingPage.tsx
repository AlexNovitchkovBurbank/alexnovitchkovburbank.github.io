import { formatting } from "../../assets/projectFormattingExamples.json";
import Format from "../../Components/Format";
import Navbar from "../../Components/Navbar/Navbar";
import "./ProjectFormattingPage.css"

const ProjectFormattingPage = () => {
  return (
    <>
      <Navbar />
      <div id="body">
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

export default ProjectFormattingPage;
