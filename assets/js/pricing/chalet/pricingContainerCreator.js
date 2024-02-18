import {chaletPricesOver6People, chaletBaseRate} from "../../chaletPrices.js";

const ChaletPricingContainerCreator = {
  Create() {
    const mainChaletPricingContainer = document.createElement("div");
    mainChaletPricingContainer.id = "main-chalet-pricing-container";

    const titleElement = document.createElement("h2");
    titleElement.textContent = "5 day chalet pricing";
    mainChaletPricingContainer.appendChild(titleElement);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "description-price-container";
      const descriptionElement = document.createElement("p");
      const priceElement = document.createElement("p");

      if (i === 1) descriptionElement.textContent = `${i} person over 6`;
      else descriptionElement.textContent = `${i} people over 6`;
      priceElement.textContent = chaletPricesOver6People[i - 1];

      descriptionPriceContainer.appendChild(descriptionElement);
      descriptionPriceContainer.appendChild(priceElement);
      mainChaletPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainChaletPricingContainer;
  },
};

export default ChaletPricingContainerCreator;
