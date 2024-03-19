import { tentBaseRate, numPeopleOver6InTentFor5NightsPrices } from "../../tentPrices.js";
import stringToIntConverter from "../converters/stringToIntConverter.js";

const tentCalculator = {
  Calculate() {
    const numNightsInput = document.querySelector(
      "#num-nights-input-for-tent-checkbox"
    );
    const numTentsInput = document.querySelector(
      "#num-tents-input-for-tent-checkbox"
    );
    const numPeopleInput = document.querySelector(
      "#num-people-input-for-tent-checkbox"
    );

    if (numTentsInput === null)
      throw new Error(
        "Number of tents input does not exist for the tent container"
      );

    if (numNightsInput === null)
      throw new Error(
        "Number of nights input does not exist for the tent container"
      );

    if (numPeopleInput === null)
      throw new Error(
        "Number of people input does not exist for the tent container"
      );

    let numNightsInputValueAsNum = stringToIntConverter.Convert(
      numNightsInput.value
    );
    let numTentsInputValueAsNum = stringToIntConverter.Convert(
      numTentsInput.value
    );
    let numPeopleInputValueAsNum = stringToIntConverter.Convert(
      numPeopleInput.value
    );

    let total = 0.0;

    if (
      isNaN(numNightsInputValueAsNum) ||
      isNaN(numPeopleInputValueAsNum) ||
      isNaN(numTentsInputValueAsNum)
    ) {
      total = NaN;
    } else {
      if (numPeopleInputValueAsNum > 6 && numPeopleInputValueAsNum <= 13) {
        total =
          tentBaseRate + (numPeopleOver6InTentFor5NightsPrices[(numPeopleInputValueAsNum - 1) - 6]) *
          numTentsInputValueAsNum *
          numNightsInputValueAsNum;
      } else if (numPeopleInputValueAsNum > 0 && numPeopleInputValueAsNum <= 6) {
        total = tentBaseRate * numTentsInputValueAsNum * numNightsInputValueAsNum;
      } else {
        total = NaN;
      }
    }

    return total;
  },
};

export default tentCalculator;
