import RvPricingLargeContainerCreator from "./largeScreenCreator.js";
import MainPricingContainerAppender from "./mainPricingContainerAppender.js";
import MainPricingContainerRemover from "./MainPricingContainerRemover.js";
import OtherMainPricingContainersRemover from "./OtherMainPricingContainersRemover.js";

const LargeScreenRvPricingProcessor = {
    Process() {
        const mainRvPricingContainer = document.querySelector("#main-rv-pricing-container");
      if (mainRvPricingContainer !== null) MainPricingContainerRemover.Remove();
      else {
        const container = RvPricingLargeContainerCreator.Create();

        OtherMainPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenRvPricingProcessor;