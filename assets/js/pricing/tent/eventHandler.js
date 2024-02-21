import tentPricingProcessor from "./pricingProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const tentPricingButton = document.querySelector("#tent-pricing-button");
  if (tentPricingButton !== null) {
    tentPricingButton.addEventListener("click", () => {
      tentPricingProcessor.Process();
    });
  }
});
