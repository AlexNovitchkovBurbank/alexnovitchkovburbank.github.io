import overnightPricingContainerCreator from "../Creators/overnightPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

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