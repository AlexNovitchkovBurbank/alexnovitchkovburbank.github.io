import chaletPricingContainerCreator from "../Creators/chaletPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const chaletPricingProcessor = {
  Process() {
    const mainChaletPricingContainer = document.querySelector(
      "#chalet-pricing-container"
    );
    if (mainChaletPricingContainer !== null)
      CurrentPricingContainersRemover.Remove();
    else {
      const container = chaletPricingContainerCreator.Create();

      CurrentPricingContainersRemover.Remove();

      mainPricingContainerAppender.Append(container);
    }
  },
};

export default chaletPricingProcessor;
