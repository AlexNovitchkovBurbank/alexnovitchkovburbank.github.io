import RvPricingProcessor from "./pricingProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const rvPricingButton = document.querySelector("#rv-pricing-button");
  if (rvPricingButton !== null) {
    rvPricingButton.addEventListener("click", () => {
      RvPricingProcessor.Process();
    });
  }
});
