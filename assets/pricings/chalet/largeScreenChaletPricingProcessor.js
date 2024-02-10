import ChaletPricingLargeContainerCreator from "./largeScreenCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const LargeScreenChaletPricingProcessor = {
    Process() {
        const mainChaletPricingContainer = document.querySelector("#main-chalet-pricing-container");
      if (mainChaletPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = ChaletPricingLargeContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenChaletPricingProcessor;