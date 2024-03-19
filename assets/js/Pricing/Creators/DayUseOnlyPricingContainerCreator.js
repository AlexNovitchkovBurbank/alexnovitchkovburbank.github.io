import { dayUseOnlyPricesOver6People, dayUseOnlyBaseRate } from "../../dayUseOnlyPrices.js";

const dayUseOnlyPricingContainerCreator = {
  Create() {
    const mainDayUseOnlyPricingContainer = document.createElement("div");
    mainDayUseOnlyPricingContainer.id = "day-use-only-pricing-container";

    const titleContainer = document.createElement("h2");
    titleContainer.textContent = "Day use only (meals are extra) pricing";
    mainDayUseOnlyPricingContainer.appendChild(titleContainer);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "description-price-entry";
      const descriptionContainer = document.createElement("p");
      const priceContainer = document.createElement("p");

      if (i === 1) descriptionContainer.textContent = `${i} person over 6`;
      else descriptionContainer.textContent = `${i} people over 6`;
      priceContainer.textContent = `$${dayUseOnlyPricesOver6People[i - 1]}`;

      descriptionPriceContainer.appendChild(descriptionContainer);
      descriptionPriceContainer.appendChild(priceContainer);
      mainDayUseOnlyPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainDayUseOnlyPricingContainer;
  },
};

export default dayUseOnlyPricingContainerCreator;
