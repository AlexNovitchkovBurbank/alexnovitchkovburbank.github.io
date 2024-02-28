import ChaletPricingProcessor from "./Processors/ChaletPricingProcessor.js";
import RvPricingProcessor from "./Processors/RvPricingProcessor.js";
import TentPricingProcessor from "./Processors/TentPricingProcessor.js";
import OvernightPricingProcessor from "./Processors/OvernightPricingProcessor.js";
import DayUseOnlyPricingProcessor from "./Processors/DayUseOnlyPricingProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const chaletPricingButton = document.querySelector("#chalet-pricing-button");
  if (chaletPricingButton !== null) {
    chaletPricingButton.addEventListener("click", () => {
      ChaletPricingProcessor.Process();
    });
  }

  const rvPricingButton = document.querySelector("#rv-pricing-button");
  if (rvPricingButton !== null) {
    rvPricingButton.addEventListener("click", () => {
      RvPricingProcessor.Process();
    });
  }

  const tentPricingButton = document.querySelector("#tent-pricing-button");
  if (tentPricingButton !== null) {
    tentPricingButton.addEventListener("click", () => {
      TentPricingProcessor.Process();
    });
  }

  const overnightPricingButton = document.querySelector("#overnight-pricing-button");
  if (overnightPricingButton !== null) {
    overnightPricingButton.addEventListener("click", () => {
      OvernightPricingProcessor.Process();
    });
  }

  const dayUseOnlyPricingButton = document.querySelector("#day-use-only-pricing-button");
  if (dayUseOnlyPricingButton !== null) {
    dayUseOnlyPricingButton.addEventListener("click", () => {
      DayUseOnlyPricingProcessor.Process();
    });
  }
});
