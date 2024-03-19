import overnightPricingContainerCreator from "../creators/overnightPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../removers/currentPricingContainersRemover.js";

const overnightPricingProcessor = {
    Process() {
        const mainOvernightPricingContainer = document.querySelector("#overnight-pricing-container");
      if (mainOvernightPricingContainer !== null) currentPricingContainersRemover.Remove();
      else {
        const container = overnightPricingContainerCreator.Create();

        currentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default overnightPricingProcessor;