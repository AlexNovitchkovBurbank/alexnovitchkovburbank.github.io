import dayUseOnlyPricingContainerCreator from "../Creators/dayUseOnlyPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

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