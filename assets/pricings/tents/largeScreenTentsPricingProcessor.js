import TentsPricingLargeContainerCreator from "./largeScreenCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const LargeScreenTentsPricingProcessor = {
    Process() {
        const mainTentsPricingContainer = document.querySelector("#main-tents-pricing-container");
      if (mainTentsPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = TentsPricingLargeContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenTentsPricingProcessor;