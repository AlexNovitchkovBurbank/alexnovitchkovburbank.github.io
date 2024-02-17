import OvernightPricingProcessor from "./pricingProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const overnightPricingButton = document.querySelector("#overnight-pricing-button");
  if (overnightPricingButton !== null) {
    overnightPricingButton.addEventListener("click", () => {
      OvernightPricingProcessor.Process();
    });
  }
});
