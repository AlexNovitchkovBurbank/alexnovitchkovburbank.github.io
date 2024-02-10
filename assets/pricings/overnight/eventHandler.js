import LargeScreenOvernightPricingProcessor from "./largeScreenOvernightPricingProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const overnightPricingButton = document.querySelector("#overnight-pricing-button");
  if (overnightPricingButton !== null) {
    overnightPricingButton.addEventListener("click", () => {
      LargeScreenOvernightPricingProcessor.Process();
    });
  }
});
