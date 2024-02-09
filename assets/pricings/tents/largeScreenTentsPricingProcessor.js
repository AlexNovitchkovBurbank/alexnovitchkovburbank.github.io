import TentsPricingLargeContainerCreator from "./largeScreenCreator.js";
import MainPricingContainerAppender from "./mainPricingContainerAppender.js";
import MainPricingContainerRemover from "./MainPricingContainerRemover.js";
import OtherMainPricingContainersRemover from "./OtherMainPricingContainersRemover.js";

const LargeScreenTentsPricingProcessor = {
    Process() {
        const mainTentsPricingContainer = document.querySelector("#main-tents-pricing-container");
      if (mainTentsPricingContainer !== null) MainPricingContainerRemover.Remove();
      else {
        const container = TentsPricingLargeContainerCreator.Create();

        OtherMainPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default LargeScreenTentsPricingProcessor;