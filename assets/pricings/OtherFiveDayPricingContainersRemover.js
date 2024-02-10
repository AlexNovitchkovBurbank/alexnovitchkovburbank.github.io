const OtherFiveDayPricingContainersRemover = {
  Remove() {
    const fiveDayPricingContainer = document.querySelector(
      "#fiveDay-pricing-container"
    );

    if (fiveDayPricingContainer === null)
      throw new Error("Five day pricing container is null");

    const elements = fiveDayPricingContainer.querySelectorAll(
      '[id^="main-"][id$="-pricing-container"]:not([id*="main-pricing-container"]'
    );

    for (let i = 0; i < elements.length; i++)
      fiveDayPricingContainer.removeChild(elements[i]);
  },
};

export default OtherFiveDayPricingContainersRemover;
