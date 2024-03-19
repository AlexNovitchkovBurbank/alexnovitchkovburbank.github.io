import dayUseOnlyPricingContainerCreator from "../creators/dayUseOnlyPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../removers/currentPricingContainersRemover.js";

const dayUseOnlyPricingProcessor = {
    Process() {
        const mainDayUseOnlyPricingContainer = document.querySelector("#day-use-only-pricing-container");
      if (mainDayUseOnlyPricingContainer !== null) currentPricingContainersRemover.Remove();
      else {
        const container = dayUseOnlyPricingContainerCreator.Create();

        currentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default dayUseOnlyPricingProcessor;