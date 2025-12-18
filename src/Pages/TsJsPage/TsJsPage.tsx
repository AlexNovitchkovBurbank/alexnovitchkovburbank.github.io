import { formatting } from "../../assets/websiteData.json";
import FormatCard from "../../Components/FormatCard/FormatCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./TsJsPage.css"

const TsJsPage = () => {
  return (
    <>
      <Navbar />
      <div id="exampleSection">
        {formatting.TS_JS.map((formatCard, i) => (
          <FormatCard
            key={i}
            title={formatCard.title}
            url={formatCard.url}
            whyThisWay={formatCard.whyThisWay}
          />
        ))}
      </div>
    </>
  );
};

export default TsJsPage;
