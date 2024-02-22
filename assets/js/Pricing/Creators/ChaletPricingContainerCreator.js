import {chaletPricesOver6People, chaletBaseRate} from "../../ChaletPrices.js";

const ChaletPricingContainerCreator = {
  Create() {
    const mainChaletPricingContainer = document.createElement("div");
    mainChaletPricingContainer.id = "chalet-pricing-container";

    const titleContainer = document.createElement("h2");
    titleContainer.textContent = "5 day chalet pricing";
    mainChaletPricingContainer.appendChild(titleContainer);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "description-price-entry";
      const descriptionContainer = document.createElement("p");
      const priceContainer = document.createElement("p");

      if (i === 1) descriptionContainer.textContent = `${i} person over 6`;
      else descriptionContainer.textContent = `${i} people over 6`;
      priceContainer.textContent = chaletPricesOver6People[i - 1];

      descriptionPriceContainer.appendChild(descriptionContainer);
      descriptionPriceContainer.appendChild(priceContainer);
      mainChaletPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainChaletPricingContainer;
  },
};

export default ChaletPricingContainerCreator;
