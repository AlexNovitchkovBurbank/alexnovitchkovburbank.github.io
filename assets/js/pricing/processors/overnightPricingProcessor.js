import overnightPricingContainerCreator from "../creators/overnightPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../removers/CurrentPricingContainersRemover.js";

const overnightPricingProcessor = {
    Process() {
        const mainOvernightPricingContainer = document.querySelector("#overnight-pricing-container");
      if (mainOvernightPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = overnightPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default overnightPricingProcessor;