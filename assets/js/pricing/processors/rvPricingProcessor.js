import rvPricingContainerCreator from "../creators/rvPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../removers/currentPricingContainersRemover.js";

const rvPricingProcessor = {
    Process() {
        const mainRvPricingContainer = document.querySelector("#rv-pricing-container");
      if (mainRvPricingContainer !== null) currentPricingContainersRemover.Remove();
      else {
        const container = rvPricingContainerCreator.Create();

        currentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default rvPricingProcessor;