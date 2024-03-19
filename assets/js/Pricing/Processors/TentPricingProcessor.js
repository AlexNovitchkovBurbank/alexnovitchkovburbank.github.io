import tentPricingContainerCreator from "../creators/tentPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../removers/CurrentPricingContainersRemover.js";

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