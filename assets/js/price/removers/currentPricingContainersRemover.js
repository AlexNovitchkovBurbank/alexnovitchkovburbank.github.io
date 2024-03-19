const currentPricingContainersRemover = {
  Remove() {
    const pricingContainer = document.querySelector(
      "#main-pricing-container"
    );

    if (pricingContainer === null) throw new Error("Pricing container is null");

    const currentContainer = pricingContainer.querySelector(
      '[id$="-pricing-container"]:not([id*="main-pricing-container"]'
    );

    if (currentContainer !== null)
      pricingContainer.removeChild(currentContainer);
  },
};

export default currentPricingContainersRemover;
