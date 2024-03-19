import {numPeopleOver6InRvFor5NightsPrices, rvBaseRate} from "../../rvPrices.js";

const rvPricingContainerCreator = {
  Create() {
    const mainRvPricingContainer = document.createElement("div");
    mainRvPricingContainer.id = "rv-pricing-container";

    const titleContainer = document.createElement("h2");
    titleContainer.textContent = "5 day RV pricing";
    mainRvPricingContainer.appendChild(titleContainer);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "description-price-entry";
      const descriptionContainer = document.createElement("p");
      const priceContainer = document.createElement("p");

      if (i === 1) descriptionContainer.textContent = `${i} person over 6`;
      else descriptionContainer.textContent = `${i} people over 6`;
      priceContainer.textContent = `$${numPeopleOver6InRvFor5NightsPrices[i - 1]}`;

      descriptionPriceContainer.appendChild(descriptionContainer);
      descriptionPriceContainer.appendChild(priceContainer);
      mainRvPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainRvPricingContainer;
  },
};

export default rvPricingContainerCreator;
