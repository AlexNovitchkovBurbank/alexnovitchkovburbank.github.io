import tentPricingContainerCreator from "./pricingContainerCreator.js";
import pricingContainerAppender from "../pricingContainerAppender.js";
import pricingContainersRemover from "../pricingContainersRemover.js";

const tentPricingProcessor = {
    Process() {
        const maInTentPricingContainer = document.querySelector("#main-tent-pricing-container");
      if (maInTentPricingContainer !== null) pricingContainersRemover.Remove();
      else {
        const container = tentPricingContainerCreator.Create();

        pricingContainersRemover.Remove();

        pricingContainerAppender.Append(container);
      }
    }
}

export default tentPricingProcessor;