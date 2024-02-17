import ChaletPricingProcessor from "./pricingProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const chaletPricingButton = document.querySelector("#chalet-pricing-button");
  if (chaletPricingButton !== null) {
    chaletPricingButton.addEventListener("click", () => {
      ChaletPricingProcessor.Process();
    });
  }
});
