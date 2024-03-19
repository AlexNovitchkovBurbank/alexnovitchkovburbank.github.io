import tentPricingContainerCreator from "../Creators/tentPricingContainerCreator.js";
import mainPricingContainerAppender from "../Appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const tentPricingProcessor = {
    Process() {
        const maInTentPricingContainer = document.querySelector("#tent-pricing-container");
      if (maInTentPricingContainer !== null) CurrentPricingContainersRemover.Remove();
      else {
        const container = tentPricingContainerCreator.Create();

        CurrentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default tentPricingProcessor;