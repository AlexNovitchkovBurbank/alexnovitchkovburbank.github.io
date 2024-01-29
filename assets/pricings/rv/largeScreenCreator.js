const RvPricingLargeContainerCreator = {
  Create() {
    const mainRvPricingContainer = document.createElement("div");
    mainRvPricingContainer.id = "main-rv-pricing-container";
    const prices = [
      "$185.00",
      "$240.00",
      "$280.00",
      "$320.00",
      "$360.00",
      "$400.00",
      "$440.00",
      "$480.00",
      "$520.00",
      "$560.00",
      "$600.00",
      "$640.00",
      "$680.00",
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
      mainRvPricingContainer.appendChild(descriptionPriceContiner);
    }

    return mainRvPricingContainer;
  },
};

export default RvPricingLargeContainerCreator;
