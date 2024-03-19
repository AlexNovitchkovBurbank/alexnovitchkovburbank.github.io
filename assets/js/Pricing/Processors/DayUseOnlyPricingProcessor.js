import DayUseOnlyPricingContainerCreator from "../Creators/DayUseOnlyPricingContainerCreator.js";
import MainPricingContainerAppender from "../Appenders/MainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const DayUseOnlyPricingProcessor = {
    Process() {
        const mainDayUseOnlyPricingContainer = document.querySelector("#day-use-only-pricing-container");
      if (mainDayUseOnlyPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = DayUseOnlyPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default DayUseOnlyPricingProcessor;