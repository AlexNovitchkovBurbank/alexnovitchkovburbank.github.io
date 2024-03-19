import individualMealPricingContainerCreator from "../creators/individualMealPricingContainerCreator.js";
import mainPricingContainerAppender from "../appenders/mainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../removers/CurrentPricingContainersRemover.js";

const individualMealPricingProcessor = {
  Process() {
    const mainIndividualMealPricingContainer = document.querySelector(
      "#individual-meal-pricing-container"
    );
    if (mainIndividualMealPricingContainer !== null)
      CurrentPricingContainersRemover.Remove();
    else {
      const container = individualMealPricingContainerCreator.Create();

      CurrentPricingContainersRemover.Remove();

      mainPricingContainerAppender.Append(container);
    }
  },
};

export default individualMealPricingProcessor;
