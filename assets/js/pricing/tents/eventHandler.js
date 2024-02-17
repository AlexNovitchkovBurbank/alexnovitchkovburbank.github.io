import TentsPricingProcessor from "./pricingProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const tentsPricingButton = document.querySelector("#tents-pricing-button");
  if (tentsPricingButton !== null) {
    tentsPricingButton.addEventListener("click", () => {
      TentsPricingProcessor.Process();
    });
  }
});
