const pricingContainersRemover = {
  Remove() {
    const overnightPricingContainer = document.querySelector(
      "#display-pricing-container"
    );

    if (overnightPricingContainer === null)
      throw new Error("Overnight pricing container is null");

    const elements = overnightPricingContainer.querySelectorAll(
      '[id^="main-"][id$="-pricing-container"]:not([id*="main-pricing-container"]'
    );

    for (let i = 0; i < elements.length; i++)
      overnightPricingContainer.removeChild(elements[i]);
  },
};

export default pricingContainersRemover;
