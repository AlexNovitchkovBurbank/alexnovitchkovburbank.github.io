import ChaletPricingLargeContainerCreator from "./largeScreenCreator.js";
import MainPricingContainerAppender from "./mainPricingContainerAppender.js";
import MainPricingContainerRemover from "./MainPricingContainerRemover.js";
import OtherMainPricingContainersRemover from "./OtherMainPricingContainersRemover.js";

const LargeScreenChaletPricingProcessor = {
    Process() {
        const mainChaletPricingContainer = document.querySelector("#main-chalet-pricing-container");
      if (mainChaletPricingContainer !== null) MainPricingContainerRemover.Remove();
      else {
        const container = ChaletPricingLargeContainerCreator.Create();

        OtherMainPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenChaletPricingProcessor;