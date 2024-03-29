import { rvBaseRate, numPeopleOver6InRvFor5NightsPrices } from "../../rvPrices.js";
import stringToIntConverter from "../converters/stringToIntConverter.js";

const rvCpstCalculator = {
  Calculate() {
    const numNightsInput = document.querySelector(
      "#num-nights-input-for-rv-checkbox"
    );
    const numRvsInput = document.querySelector(
      "#num-rvs-input-for-rv-checkbox"
    );
    const numPeopleInput = document.querySelector(
      "#num-people-input-for-rv-checkbox"
    );

    if (numRvsInput === null)
      throw new Error(
        "Number of rvs input field does not exist for the rv stay container"
      );

    if (numNightsInput === null)
      throw new Error(
        "Number of nights input field does not exist for the rv stay container"
      );

    if (numPeopleInput === null)
      throw new Error(
        "Number of people input field does not exist for the rv stay container"
      );

    let numNightsInputValueAsNum = stringToIntConverter.Convert(
      numNightsInput.value
    );
    let numRvsInputValueAsNum = stringToIntConverter.Convert(numRvsInput.value);
    let numPeopleInputValueAsNum = stringToIntConverter.Convert(
      numPeopleInput.value
    );

    let total = 0.0;

    if (
      isNaN(numNightsInputValueAsNum) ||
      isNaN(numPeopleInputValueAsNum) ||
      isNaN(numRvsInputValueAsNum)
    ) {
      total = NaN;
    } else {
      if (numPeopleInputValueAsNum > 6 && numPeopleInputValueAsNum <= 13) {
        total =
          (rvBaseRate + numPeopleOver6InRvFor5NightsPrices[(numPeopleInputValueAsNum - 1) - 6]) *
          numRvsInputValueAsNum *
          numNightsInputValueAsNum;
      } else if (numPeopleInputValueAsNum > 0 && numPeopleInputValueAsNum <= 6) {
        total = rvBaseRate * numRvsInputValueAsNum * numNightsInputValueAsNum;
      } else {
        total = NaN;
      }
    }

    return total;
  },
};

export default rvCpstCalculator;
