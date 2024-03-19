import { overnightPricesOver6People, overnightBaseRate } from "../../overnightPrices.js";

const overnightPricingContainerCreator = {
  Create() {
    const mainOvernightPricingContainer = document.createElement("div");
    mainOvernightPricingContainer.id = "overnight-pricing-container";

    const titleContainer = document.createElement("h2");
    titleContainer.textContent = "Overnight (with meals) pricing";
    mainOvernightPricingContainer.appendChild(titleContainer);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "description-price-entry";
      const descriptionContainer = document.createElement("p");
      const priceContainer = document.createElement("p");

      if (i === 1) descriptionContainer.textContent = `${i} person over 6`;
      else descriptionContainer.textContent = `${i} people over 6`;
      priceContainer.textContent = `$${overnightPricesOver6People[i - 1]}`;

      descriptionPriceContainer.appendChild(descriptionContainer);
      descriptionPriceContainer.appendChild(priceContainer);
      mainOvernightPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainOvernightPricingContainer;
  },
};

export default overnightPricingContainerCreator;
