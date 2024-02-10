import RvPricingLargeContainerCreator from "./largeScreenCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const LargeScreenRvPricingProcessor = {
    Process() {
        const mainRvPricingContainer = document.querySelector("#main-rv-pricing-container");
      if (mainRvPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = RvPricingLargeContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenRvPricingProcessor;