import chaletPricingContainerCreator from "../creators/chaletPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../removers/currentPricingContainersRemover.js";

const chaletPricingProcessor = {
  Process() {
    const mainChaletPricingContainer = document.querySelector(
      "#chalet-pricing-container"
    );
    if (mainChaletPricingContainer !== null)
      currentPricingContainersRemover.Remove();
    else {
      const container = chaletPricingContainerCreator.Create();

      currentPricingContainersRemover.Remove();

      mainPricingContainerAppender.Append(container);
    }
  },
};

export default chaletPricingProcessor;
