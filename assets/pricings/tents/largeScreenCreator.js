const TentsPricingLargeContainerCreator = {
  Create() {
    const mainTentsPricingContainer = document.createElement("div");
    mainTentsPricingContainer.id = "main-tents-pricing-container";
    const prices = [
      "$120.00",
      "$175.00",
      "$215.00",
      "$255.00",
      "$295.00",
      "$335.00",
      "$375.00",
      "$415.00",
      "$445.00",
      "$295.00",
      "$525.00",
      "$595.00",
      "$615.00",
    ];

    const titleElement = document.createElement("h2");
    titleElement.textContent = "5 day tent pricing";
    mainTentsPricingContainer.appendChild(titleElement);

    for (let i = 1; i <= 13; i++) {
      const descriptionPriceContainer = document.createElement("div");
      descriptionPriceContainer.className =
        "price-flex-container-large-screen-width";
      const descriptionElement = document.createElement("p");
      const priceElement = document.createElement("p");

      if (i === 1) descriptionElement.textContent = `${i} person over 6`;
      else descriptionElement.textContent = `${i} people over 6`;
      priceElement.textContent = prices[i - 1];

      descriptionPriceContainer.appendChild(descriptionElement);
      descriptionPriceContainer.appendChild(priceElement);
      mainTentsPricingContainer.appendChild(descriptionPriceContainer);
    }

    return mainTentsPricingContainer;
  },
};

export default TentsPricingLargeContainerCreator;
