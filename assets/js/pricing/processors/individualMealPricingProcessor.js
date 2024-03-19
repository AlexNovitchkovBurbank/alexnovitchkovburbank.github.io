import individualMealPricingContainerCreator from "../creators/individualMealPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import currentPricingContainersRemover from "../removers/currentPricingContainersRemover.js";

const individualMealPricingProcessor = {
  Process() {
    const mainIndividualMealPricingContainer = document.querySelector(
      "#individual-meal-pricing-container"
    );
    if (mainIndividualMealPricingContainer !== null)
      currentPricingContainersRemover.Remove();
    else {
      const container = individualMealPricingContainerCreator.Create();

      currentPricingContainersRemover.Remove();

      mainPricingContainerAppender.Append(container);
    }
  },
};

export default individualMealPricingProcessor;
