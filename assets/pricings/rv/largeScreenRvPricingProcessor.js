import RvPricingLargeContainerCreator from "./largeScreenCreator.js";
import FiveDayPricingContainerAppender from "./fiveDayPricingContainerAppender.js";
import FiveDayPricingContainerRemover from "./FiveDayPricingContainerRemover.js";
import OtherFiveDayPricingContainersRemover from "../OtherFiveDayPricingContainersRemover.js";
const LargeScreenRvPricingProcessor = {
    Process() {
        const mainRvPricingContainer = document.querySelector("#main-rv-pricing-container");
      if (mainRvPricingContainer !== null) FiveDayPricingContainerRemover.Remove();
      else {
        const container = RvPricingLargeContainerCreator.Create();

        OtherFiveDayPricingContainersRemover.Remove();

        FiveDayPricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenRvPricingProcessor;