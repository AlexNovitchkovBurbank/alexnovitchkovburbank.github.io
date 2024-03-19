import rvPricingContainerCreator from "../Creators/rvPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const rvPricingProcessor = {
    Process() {
        const mainRvPricingContainer = document.querySelector("#rv-pricing-container");
      if (mainRvPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = rvPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default rvPricingProcessor;