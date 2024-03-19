import OvernightPricingContainerCreator from "../Creators/OvernightPricingContainerCreator.js";
import MainPricingContainerAppender from "../Appenders/MainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const OvernightPricingProcessor = {
    Process() {
        const mainOvernightPricingContainer = document.querySelector("#overnight-pricing-container");
      if (mainOvernightPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = OvernightPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default OvernightPricingProcessor;