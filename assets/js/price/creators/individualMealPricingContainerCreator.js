const individualMealPricingContainerCreator = {
  Create() {
    const mainIndividualMealPricingContainer = document.createElement("div");
    mainIndividualMealPricingContainer.id = "individual-meal-pricing-container";

    const titleContainer = document.createElement("h2");
    titleContainer.textContent = "Individual meal pricing";
    mainIndividualMealPricingContainer.appendChild(titleContainer);

    const meal = ["Breakfast", "Lunch", "Dinner"];

    for (let i = 0; i < 3; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "description-price-entry";
      const descriptionContainer = document.createElement("p");
      const priceContainer = document.createElement("p");

      descriptionContainer.textContent = `${meal[i]}`;
      priceContainer.textContent = `$10`;

      descriptionPriceContainer.appendChild(descriptionContainer);
      descriptionPriceContainer.appendChild(priceContainer);
      mainIndividualMealPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainIndividualMealPricingContainer;
  },
};

export default individualMealPricingContainerCreator;
