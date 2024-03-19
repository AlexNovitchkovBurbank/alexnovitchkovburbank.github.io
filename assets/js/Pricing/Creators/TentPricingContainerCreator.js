import {numPeopleOver6InTentFor5NightsPrices, tentBaseRate} from "../../TentPrices.js";

const TentPricingContainerCreator = {
  Create() {
    const maInTentPricingContainer = document.createElement("div");
    maInTentPricingContainer.id = "tent-pricing-container";

    const titleContainer = document.createElement("h2");
    titleContainer.textContent = "5 day tent pricing";
    maInTentPricingContainer.appendChild(titleContainer);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "description-price-entry";
      const descriptionContainer = document.createElement("p");
      const priceContainer = document.createElement("p");

      if (i === 1) descriptionContainer.textContent = `${i} person over 6`;
      else descriptionContainer.textContent = `${i} people over 6`;
      priceContainer.textContent = numPeopleOver6InTentFor5NightsPrices[i - 1];

      descriptionPriceContainer.appendChild(descriptionContainer);
      descriptionPriceContainer.appendChild(priceContainer);
      maInTentPricingContainer.appendChild(descriptionPriceContainer);
    }

    return maInTentPricingContainer;
  },
};

export default TentPricingContainerCreator;
