const ChaletPricingLargeContainerCreator = {
  Create() {
    const mainChaletPricingContainer = document.createElement("div");
    mainChaletPricingContainer.id = "main-chalet-pricing-container";
    const prices = [
      "$137.00",
      "$265.00",
      "$365.00",
      "$465.00",
      "$565.00",
      "$665.00",
      "$765.00",
      "$865.00",
      "$965.00",
      "$1065.00",
      "$1165.00",
      "$1265.00",
      "$1365.00",
    ];
    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContiner = document.createElement("div");
      descriptionPriceContiner.className =
        "price-flex-container-large-screen-width";
      const descriptionElement = document.createElement("p");
      const priceElement = document.createElement("p");

      if (i === 1) descriptionElement.textContent = `${i} person over 6`;
      else descriptionElement.textContent = `${i} people over 6`;
      priceElement.textContent = prices[i - 1];

      descriptionPriceContiner.appendChild(descriptionElement);
      descriptionPriceContiner.appendChild(priceElement);
      mainChaletPricingContainer.appendChild(descriptionPriceContiner);
    }

    return mainChaletPricingContainer;
  },
};

export default ChaletPricingLargeContainerCreator;
