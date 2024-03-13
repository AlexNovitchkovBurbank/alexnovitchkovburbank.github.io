import { tentBaseRate, numTentsPrices } from "../../TentPrices.js";
import StringToIntConverter from "../Converters/StringToIntConverter.js";

const TentCalculator = {
    Calculate() {
        const numNightsInput = document.querySelector("#num-nights-input-for-tent-checkbox");
        const numTentsInput = document.querySelector("#num-tents-input-for-tent-checkbox");

        if (numTentsInput === null)
            throw new Error("Number of tents input does not exist for the tent container");

        if (numNightsInput === null)
            throw new Error("Number of nights input does not exist for the tent container");

        const numNightsInputValueAsNum = StringToIntConverter.Convert(numNightsInput.value);
        const numTentsInputValueAsNum = StringToIntConverter.Convert(numTentsInput.value);

        let total = 0.0;

        if (isNaN(numTentsInputValueAsNum) || isNaN(numNightsInputValueAsNum)) {
            total = NaN;
        }
        if (numTentsInputValueAsNum >= 6) {
            total = (tentBaseRate + numTentsPrices[numTentsInputValueAsNum - 1]) * numNightsInputValueAsNum;
        }
        else if (numTentsInputValueAsNum === 0 || numNightsInputValueAsNum === 0) {
            total = 0.0;
        }
        else {
            total = tentBaseRate * numNightsInputValueAsNum;
        }

        return total;
    }
}

export default TentCalculator;