const OvernightPricingContainerCreator = {
  Create() {
    const mainOvernightPricingContainer = document.createElement("div");
    mainOvernightPricingContainer.id = "main-overnight-pricing-container";
    const prices = [
      "$30.00",
      "$60.00",
      "$90.00",
      "$120.00",
      "$150.00",
      "$180.00",
      "$210.00",
      "$240.00",
      "$270.00",
      "$300.00",
      "$330.00",
      "$360.00",
      "$390.00",
    ];

    const titleElement = document.createElement("h2");
    titleElement.textContent = "Overnight (with meals) pricing";
    mainOvernightPricingContainer.appendChild(titleElement);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "price-flex-container---width";
      const descriptionElement = document.createElement("p");
      const priceElement = document.createElement("p");

      if (i === 1) descriptionElement.textContent = `${i} person over 6`;
      else descriptionElement.textContent = `${i} people over 6`;
      priceElement.textContent = prices[i - 1];

      descriptionPriceContainer.appendChild(descriptionElement);
      descriptionPriceContainer.appendChild(priceElement);
      mainOvernightPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainOvernightPricingContainer;
  },
};

export default OvernightPricingContainerCreator;
