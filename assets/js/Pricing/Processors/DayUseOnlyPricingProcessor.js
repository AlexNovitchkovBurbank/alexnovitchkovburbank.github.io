import dayUseOnlyPricingContainerCreator from "../creators/dayUseOnlyPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../removers/CurrentPricingContainersRemover.js";

const dayUseOnlyPricingProcessor = {
    Process() {
        const mainDayUseOnlyPricingContainer = document.querySelector("#day-use-only-pricing-container");
      if (mainDayUseOnlyPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = dayUseOnlyPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default dayUseOnlyPricingProcessor;