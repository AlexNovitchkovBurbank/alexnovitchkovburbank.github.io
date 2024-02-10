import OvernightPricingLargeContainerCreator from "./largeScreenCreator.js";
import MainPricingContainerAppender from "./overnightPricingContainerAppender.js";
import MainPricingContainerRemover from "./OvernightPricingContainerRemover.js";
import OtherMainPricingContainersRemover from "../OtherOvernightPricingContainersRemover.js";

const LargeScreenOvernightPricingProcessor = {
    Process() {
        const mainOvernightPricingContainer = document.querySelector("#main-overnight-pricing-container");
      if (mainOvernightPricingContainer !== null) MainPricingContainerRemover.Remove();
      else {
        const container = OvernightPricingLargeContainerCreator.Create();

        OtherMainPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenOvernightPricingProcessor;