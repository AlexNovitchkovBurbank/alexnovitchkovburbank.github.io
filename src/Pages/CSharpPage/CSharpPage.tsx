import { formatting } from "../../assets/websiteData.json";
import FormatCard from "../../Components/FormatCard/FormatCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./CSharpPage.css"

const CSharpPage = () => {
  return (
    <>
      <Navbar />
      <div className="title">C#</div>
      <div className="exampleSection">
        <div className="folderStructure formatCardContainer">
          {formatting.CSharp.FolderStructure.map((formatCard, i) => (
            <FormatCard
              key={i}
              title={formatCard.title}
              url={formatCard.url}
              whyThisWay={formatCard.whyThisWay}
            />
          ))}
        </div>
        <div className="codeStructure formatCardContainer">
          {formatting.CSharp.CodeStructure.map((formatCard, i) => (
            <FormatCard
              key={i}
              title={formatCard.title}
              url={formatCard.url}
              whyThisWay={formatCard.whyThisWay}
            />
          ))}
        </div>
        <div className="testStructure formatCardContainer">
          {formatting.CSharp.TestCodeStructure.map((formatCard, i) => (
            <FormatCard
              key={i}
              title={formatCard.title}
              url={formatCard.url}
              whyThisWay={formatCard.whyThisWay}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CSharpPage;
