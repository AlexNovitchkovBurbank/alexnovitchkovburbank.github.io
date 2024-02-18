import {rvPricesOver6People, rvBaseRate} from "../../rvPrices.js";

const RvPricingContainerCreator = {
  Create() {
    const mainRvPricingContainer = document.createElement("div");
    mainRvPricingContainer.id = "main-rv-pricing-container";

    const titleElement = document.createElement("h2");
    titleElement.textContent = "5 day RV pricing";
    mainRvPricingContainer.appendChild(titleElement);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "description-price-container";
      const descriptionElement = document.createElement("p");
      const priceElement = document.createElement("p");

      if (i === 1) descriptionElement.textContent = `${i} person over 6`;
      else descriptionElement.textContent = `${i} people over 6`;
      priceElement.textContent = rvPricesOver6People[i - 1];

      descriptionPriceContainer.appendChild(descriptionElement);
      descriptionPriceContainer.appendChild(priceElement);
      mainRvPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainRvPricingContainer;
  },
};

export default RvPricingContainerCreator;
