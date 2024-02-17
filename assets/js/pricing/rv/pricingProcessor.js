import RvPricingContainerCreator from "./pricingContainerCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const RvPricingProcessor = {
    Process() {
        const mainRvPricingContainer = document.querySelector("#main-rv-pricing-container");
      if (mainRvPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = RvPricingContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default RvPricingProcessor;