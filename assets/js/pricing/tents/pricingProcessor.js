import TentsPricingContainerCreator from "./pricingContainerCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const TentsPricingProcessor = {
    Process() {
        const mainTentsPricingContainer = document.querySelector("#main-tents-pricing-container");
      if (mainTentsPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = TentsPricingContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default TentsPricingProcessor;