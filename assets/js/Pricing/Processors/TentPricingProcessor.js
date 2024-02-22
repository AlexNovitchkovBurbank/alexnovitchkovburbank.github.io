import TentPricingContainerCreator from "../Creators/TentPricingContainerCreator.js";
import MainPricingContainerAppender from "../Appenders/MainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const TentPricingProcessor = {
    Process() {
        const maInTentPricingContainer = document.querySelector("#tent-pricing-container");
      if (maInTentPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = TentPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        MainPricingContainerAppender.Append(container);
      }
    }
}

export default TentPricingProcessor;