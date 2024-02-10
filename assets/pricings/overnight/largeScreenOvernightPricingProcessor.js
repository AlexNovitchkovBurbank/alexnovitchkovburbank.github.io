import OvernightPricingLargeContainerCreator from "./largeScreenCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const LargeScreenOvernightPricingProcessor = {
    Process() {
        const mainOvernightPricingContainer = document.querySelector("#main-overnight-pricing-container");
      if (mainOvernightPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = OvernightPricingLargeContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenOvernightPricingProcessor;