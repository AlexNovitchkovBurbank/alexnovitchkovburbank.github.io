import { formatting } from "../../assets/websiteData.json";
import FormatCard from "../../Components/FormatCard/FormatCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./TsJsPage.css";

const TsJsPage = () => {
  return (
    <>
      <Navbar />
      <div className="title">TS/JS</div>
      <div className="exampleSection">
        <section
          id="ts_jsFolderStructure"
          className="folderStructure formatCardContainer"
        >
          {formatting.TS_JS.FolderStructure.map((formatCard, i) => (
            <FormatCard
              key={i}
              title={formatCard.title}
              url={formatCard.url}
              whyThisWay={formatCard.whyThisWay}
            />
          ))}
        </section>
        <section
          id="ts_jsCodeStructure"
          className="codeStructure formatCardContainer"
        >
          {formatting.TS_JS.CodeStructure.map((formatCard, i) => (
            <FormatCard
              key={i}
              title={formatCard.title}
              url={formatCard.url}
              whyThisWay={formatCard.whyThisWay}
            />
          ))}
        </section>
        <section
          id="ts_jsTestsStructure"
          className="testStructure formatCardContainer"
        >
          {formatting.TS_JS.TestCodeStructure.map((formatCard, i) => (
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

export default TsJsPage;
