import OvernightPricingContainerCreator from "./pricingContainerCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const OvernightPricingProcessor = {
    Process() {
        const mainOvernightPricingContainer = document.querySelector("#main-overnight-pricing-container");
      if (mainOvernightPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = OvernightPricingContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default OvernightPricingProcessor;