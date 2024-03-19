import tentPricingContainerCreator from "../creators/tentPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../removers/currentPricingContainersRemover.js";

const tentPricingProcessor = {
    Process() {
        const maInTentPricingContainer = document.querySelector("#tent-pricing-container");
      if (maInTentPricingContainer !== null) currentPricingContainersRemover.Remove();
      else {
        const container = tentPricingContainerCreator.Create();

        currentPricingContainersRemover.Remove();

        mainPricingContainerAppender.Append(container);
      }
    }
}

export default tentPricingProcessor;