import rvPricingContainerCreator from "../creators/rvPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../removers/CurrentPricingContainersRemover.js";

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