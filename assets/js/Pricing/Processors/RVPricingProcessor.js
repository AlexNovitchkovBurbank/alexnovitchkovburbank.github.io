import RvPricingContainerCreator from "../Creators/RvPricingContainerCreator.js";
import MainPricingContainerAppender from "../Appenders/MainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const RvPricingProcessor = {
    Process() {
        const mainRvPricingContainer = document.querySelector("#rv-pricing-container");
      if (mainRvPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = RvPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default RvPricingProcessor;