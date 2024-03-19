import ChaletPricingContainerCreator from "../Creators/ChaletPricingContainerCreator.js";
import MainPricingContainerAppender from "../Appenders/MainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const ChaletPricingProcessor = {
  Process() {
    const mainChaletPricingContainer = document.querySelector(
      "#chalet-pricing-container"
    );
    if (mainChaletPricingContainer !== null)
      CurrentPricingContainersRemover.Remove();
    else {
      const container = ChaletPricingContainerCreator.Create();

      CurrentPricingContainersRemover.Remove();

      MainPricingContainerAppender.Append(container);
    }
  },
};

export default ChaletPricingProcessor;
