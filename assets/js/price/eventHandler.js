import chaletPricingProcessor from "./Processors/chaletPricingProcessor.js";
import rvPricingProcessor from "./Processors/rvPricingProcessor.js";
import tentPricingProcessor from "./Processors/tentPricingProcessor.js";
import overnightPricingProcessor from "./Processors/overnightPricingProcessor.js";
import dayUseOnlyPricingProcessor from "./Processors/dayUseOnlyPricingProcessor.js";
import individualMealPricingProcessor from "./Processors/individualMealPricingProcessor.js";

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
