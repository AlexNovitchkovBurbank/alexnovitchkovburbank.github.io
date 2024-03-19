import {
  chaletBaseRate,
  numPeopleOver6InChaletFor5NightsPrices,
} from "../../ChaletPrices.js";
import StringToIntConverter from "../Converters/StringToIntConverter.js";

const ChaletCalculator = {
  Calculate() {
    const numNightsInput = document.querySelector(
      "#num-nights-input-for-chalet-checkbox"
    );
    const numPeopleInput = document.querySelector(
      "#num-people-input-for-chalet-checkbox"
    );
    const numBedsInput = document.querySelector(
      "#num-beds-input-for-chalet-checkbox"
    );

    if (numBedsInput === null)
      throw new Error(
        "Number of beds input does not exist for the chalet container"
      );

    if (numPeopleInput === null)
      throw new Error(
        "Number of people input does not exist for the chalet container"
      );

    if (numNightsInput === null)
      throw new Error(
        "Number of nights input does not exist for the chalet container"
      );

    let numNightsInputValueAsNum = StringToIntConverter.Convert(
      numNightsInput.value
    );
    let numPeopleInputValueAsNum = StringToIntConverter.Convert(
      numPeopleInput.value
    );
    let numBedsInputValueAsNum = StringToIntConverter.Convert(
      numBedsInput.value
    );

    let total = 0.0;

    if (
      isNaN(numNightsInputValueAsNum) ||
      isNaN(numPeopleInputValueAsNum) ||
      isNaN(numBedsInputValueAsNum)
    ) {
      total = NaN;
    } else {
      if (numPeopleInputValueAsNum >= 6 && numPeopleInputValueAsNum <= 13) {
        total =
          (chaletBaseRate + numPeopleOver6InChaletFor5NightsPrices[(numPeopleInputValueAsNum + 1) - 6]) *
          numBedsInputValueAsNum *
          numNightsInputValueAsNum;
      } else if (numPeopleInputValueAsNum > 0 && numPeopleInputValueAsNum < 6) {
        total =
          chaletBaseRate * numBedsInputValueAsNum * numNightsInputValueAsNum;
      } else {
        total = NaN;
      }
    }

    return total;
  },
};

export default ChaletCalculator;
