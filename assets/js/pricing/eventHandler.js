import chaletPricingProcessor from "./processors/chaletPricingProcessor.js";
import rvPricingProcessor from "./processors/rvPricingProcessor.js";
import tentPricingProcessor from "./processors/tentPricingProcessor.js";
import overnightPricingProcessor from "./processors/overnightPricingProcessor.js";
import dayUseOnlyPricingProcessor from "./processors/dayUseOnlyPricingProcessor.js";
import individualMealPricingProcessor from "./processors/individualMealPricingProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const chaletPricingButton = document.querySelector("#chalet-pricing-button");
  if (chaletPricingButton !== null) {
    chaletPricingButton.addEventListener("click", () => {
      chaletPricingProcessor.Process();
    });
  }

  const rvPricingButton = document.querySelector("#rv-pricing-button");
  if (rvPricingButton !== null) {
    rvPricingButton.addEventListener("click", () => {
      rvPricingProcessor.Process();
    });
  }

  const tentPricingButton = document.querySelector("#tent-pricing-button");
  if (tentPricingButton !== null) {
    tentPricingButton.addEventListener("click", () => {
      tentPricingProcessor.Process();
    });
  }

  const overnightPricingButton = document.querySelector("#overnight-pricing-button");
  if (overnightPricingButton !== null) {
    overnightPricingButton.addEventListener("click", () => {
      overnightPricingProcessor.Process();
    });
  }

  const dayUseOnlyPricingButton = document.querySelector("#day-use-only-pricing-button");
  if (dayUseOnlyPricingButton !== null) {
    dayUseOnlyPricingButton.addEventListener("click", () => {
      dayUseOnlyPricingProcessor.Process();
    });
  }

  const individualMealsPricingButton = document.querySelector("#individual-meal-pricing-button");
  if (individualMealsPricingButton !== null) {
    individualMealsPricingButton.addEventListener("click", () => {
      individualMealPricingProcessor.Process();
    });
  }
});
