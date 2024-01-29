const OtherMainPricingContainersRemover = {
  Remove() {
    const elements = document.querySelectorAll(
      '[id^="main-"][id$="-pricing-container"]:not([id*="main-pricing-container"]'
    );
    const mainPricingContainer = document.querySelector(
      "#main-pricing-container"
    );

    for (let i = 0; i < elements.length; i++)
      mainPricingContainer.removeChild(elements[i]);
  },
};

export default OtherMainPricingContainersRemover;
