import RVPricingContainerCreator from "../Creators/RVPricingContainerCreator.js";
import MainPricingContainerAppender from "../Appenders/MainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const RVPricingProcessor = {
    Process() {
        const mainRvPricingContainer = document.querySelector("#rv-pricing-container");
      if (mainRvPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = RVPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default RVPricingProcessor;