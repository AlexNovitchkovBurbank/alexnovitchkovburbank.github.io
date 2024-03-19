import IndividualMealPricingContainerCreator from "../Creators/IndividualMealPricingContainerCreator.js";
import MainPricingContainerAppender from "../Appenders/MainPricingContainerAppender.js";
import CurrentPricingContainersRemover from "../Removers/CurrentPricingContainersRemover.js";

const IndividualMealPricingProcessor = {
  Process() {
    const mainIndividualMealPricingContainer = document.querySelector(
      "#individual-meal-pricing-container"
    );
    if (mainIndividualMealPricingContainer !== null)
      CurrentPricingContainersRemover.Remove();
    else {
      const container = IndividualMealPricingContainerCreator.Create();

      CurrentPricingContainersRemover.Remove();

      MainPricingContainerAppender.Append(container);
    }
  },
};

export default IndividualMealPricingProcessor;
