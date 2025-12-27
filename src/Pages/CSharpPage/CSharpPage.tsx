import { formatting } from "../../assets/websiteData.json";
import FormatCard from "../../Components/FormatCard/FormatCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./CSharpPage.css";

const CSharpPage = () => {
  return (
    <>
      <Navbar />
      <div className="title">C#</div>
      <div className="exampleSection">
        <section
          id="csharpFolderStructure"
          className="folderStructure formatCardContainer"
        >
          {formatting.CSharp.FolderStructure.map((formatCard, i) => (
            <FormatCard
              key={i}
              title={formatCard.title}
              url={formatCard.url}
              whyThisWay={formatCard.whyThisWay}
            />
          ))}
        </section>
        <section
          id="csharpCodeStructure"
          className="codeStructure formatCardContainer"
        >
          {formatting.CSharp.CodeStructure.map((formatCard, i) => (
            <FormatCard
              key={i}
              title={formatCard.title}
              url={formatCard.url}
              whyThisWay={formatCard.whyThisWay}
            />
          ))}
        </section>
        <section
          id="csharpTestsStructure"
          className="testStructure formatCardContainer"
        >
          {formatting.CSharp.TestCodeStructure.map((formatCard, i) => (
            <FormatCard
              key={i}
              title={formatCard.title}
              url={formatCard.url}
              whyThisWay={formatCard.whyThisWay}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default CSharpPage;
