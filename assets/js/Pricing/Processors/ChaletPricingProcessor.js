import chaletPricingContainerCreator from "../Creators/chaletPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../Removers/currentPricingContainersRemover.js";

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
