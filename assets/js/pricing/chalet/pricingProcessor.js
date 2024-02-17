import ChaletPricingContainerCreator from "./pricingContainerCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const ChaletPricingProcessor = {
    Process() {
        const mainChaletPricingContainer = document.querySelector("#main-chalet-pricing-container");
      if (mainChaletPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = ChaletPricingContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default ChaletPricingProcessor;