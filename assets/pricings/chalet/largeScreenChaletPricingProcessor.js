import ChaletPricingLargeContainerCreator from "./largeScreenCreator.js";
import FiveDayPricingContainerAppender from "./fiveDayPricingContainerAppender.js";
import FiveDayPricingContainerRemover from "./FiveDayPricingContainerRemover.js";
import OtherFiveDayPricingContainersRemover from "../OtherFiveDayPricingContainersRemover.js";

const LargeScreenChaletPricingProcessor = {
    Process() {
        const mainChaletPricingContainer = document.querySelector("#main-chalet-pricing-container");
      if (mainChaletPricingContainer !== null) FiveDayPricingContainerRemover.Remove();
      else {
        const container = ChaletPricingLargeContainerCreator.Create();

        OtherFiveDayPricingContainersRemover.Remove();

        FiveDayPricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenChaletPricingProcessor;