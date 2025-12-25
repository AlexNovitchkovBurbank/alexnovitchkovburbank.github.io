import { formatting } from "../../assets/websiteData.json";
import ConceptCard from "../../Components/ConceptCard/ConceptCard";
import Navbar from "../../Components/Navbar/Navbar";
import "./ConceptsPage.css";

const ConceptsPage = () => {
  return (
    <>
      <Navbar />
      <div className="title">Concepts</div>
      <div className="body">
        <div className="section">
          <div className="title">Cloud</div>
          <div className="conceptsText">
            <ConceptCard
              title="CloudFormation"
              description={formatting.concepts.cloud.cloudformation}
            />
            <ConceptCard
              title="Serverless"
              description={formatting.concepts.cloud.serverless}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">Testing</div>
          <div className="conceptsText">
            <ConceptCard
              title="Why test"
              description={formatting.concepts.test.why}
            />
            <ConceptCard
              title="Unit"
              description={formatting.concepts.test.unit}
            />
            <ConceptCard
              title="Integration"
              description={formatting.concepts.test.integration}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">CI/CD</div>
          <div className="conceptsText">
            <ConceptCard
              title="CI"
              description={formatting.concepts.CI_CD.CI}
            />
            <ConceptCard
              title="CD"
              description={formatting.concepts.CI_CD.CD}
            />
          </div>
        </div>
        <div className="section">
          <div className="title">GitHub Branches</div>
          <div className="conceptsText">
            <ConceptCard
              title="Main"
              description={formatting.concepts.github_branches.main}
            />
            <ConceptCard
              title="Dev"
              description={formatting.concepts.github_branches.dev}
            />
            <ConceptCard
              title="Feature"
              description={formatting.concepts.github_branches.feature}
            />
            <ConceptCard
              title="Bug"
              description={formatting.concepts.github_branches.bug}
            />
            <ConceptCard
              title="PR"
              description={formatting.concepts.github_branches.PR}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConceptsPage;
