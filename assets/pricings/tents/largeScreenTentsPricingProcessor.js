import TentsPricingLargeContainerCreator from "./largeScreenCreator.js";
import FiveDayPricingContainerAppender from "./fiveDayPricingContainerAppender.js";
import FiveDayPricingContainerRemover from "./FiveDayPricingContainerRemover.js";
import OtherFiveDayPricingContainersRemover from "../OtherFiveDayPricingContainersRemover.js";

const LargeScreenTentsPricingProcessor = {
    Process() {
        const mainTentsPricingContainer = document.querySelector("#main-tents-pricing-container");
      if (mainTentsPricingContainer !== null) FiveDayPricingContainerRemover.Remove();
      else {
        const container = TentsPricingLargeContainerCreator.Create();

        OtherFiveDayPricingContainersRemover.Remove();

        FiveDayPricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenTentsPricingProcessor;