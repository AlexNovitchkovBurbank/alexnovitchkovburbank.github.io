import { rvBaseRate, numPeopleOver6InRvFor5NightsPrices } from "../../RvPrices.js";
import StringToIntConverter from "../Converters/StringToIntConverter.js";

const RvCalculator = {
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
        "Number of rvs input does not exist for the rv stay container"
      );

    if (numNightsInput === null)
      throw new Error(
        "Number of nights input does not exist for the rv stay container"
      );

    if (numPeopleInput === null)
      throw new Error(
        "Number of people input does not exist for the rv stay container"
      );

    let numNightsInputValueAsNum = StringToIntConverter.Convert(
      numNightsInput.value
    );
    let numRvsInputValueAsNum = StringToIntConverter.Convert(numRvsInput.value);
    let numPeopleInputValueAsNum = StringToIntConverter.Convert(
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
      if (numPeopleInputValueAsNum >= 6 && numPeopleInputValueAsNum <= 13) {
        total =
          (rvBaseRate + numPeopleOver6InRvFor5NightsPrices[(numPeopleInputValueAsNum + 1) - 6]) *
          numRvsInputValueAsNum *
          numNightsInputValueAsNum;
      } else if (numPeopleInputValueAsNum > 0 && numPeopleInputValueAsNum < 6) {
        total = rvBaseRate * numRvsInputValueAsNum * numNightsInputValueAsNum;
      } else {
        total = NaN;
      }
    }

    return total;
  },
};

export default RvCalculator;
