import { rvBaseRate, numRvsPrices } from "../../RvPrices.js";
import StringToIntConverter from "../Converters/StringToIntConverter.js";

const RvCalculator = {
    Calculate() {
        const numNightsInput = document.querySelector("#num-nights-input-for-overnight-checkbox");
        const numRvsInput = document.querySelector("#num-rvs-input-for-rv-checkbox");

        if (numRvsInput === null)
            throw new Error("Number of rvs input does not exist for the day use only container");

        if (numNightsInput === null)
            throw new Error("Number of tents input container does not exist for the overnight stay container");

        const numNightsInputValueAsNum = StringToIntConverter.Convert(numNightsInput.value);
        const numRvsInputValueAsNum = StringToIntConverter.Convert(numRvsInput.value);

        let total = 0.0;

        if (isNaN(numRvsInputValueAsNum) || isNaN(numNightsInputValueAsNum)) {
            total = NaN;
        }
        if (numRvsInputValueAsNum >= 6) {
            total = (tentBaseRate + numRvsPrices[numRvsInputValueAsNum - 1]) * numNightsInputValueAsNum;
        }
        else if (numRvsInputValueAsNum === 0 || numNightsInputValueAsNum === 0) {
            total = 0.0;
        }
        else {
            total = tentPerDayBaseRate * numNightsInputValueAsNum;
        }

        return total;
    }
}

export default RvCalculator;