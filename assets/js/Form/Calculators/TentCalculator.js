import { tentBaseRate, numTentsPrices } from "../../TentPrices.js";
import StringToIntConverter from "../Converters/StringToIntConverter.js";

const TentCalculator = {
    Calculate() {
        const numNightsInput = document.querySelector("#num-nights-input-for-overnight-checkbox");
        const numTentsInput = document.querySelector("#num-tents-input-for-day-use-only-checkbox");

        if (numTentsInput === null)
            throw new Error("Number of tents input does not exist for the day use only container");

        if (numNightsInput === null)
            throw new Error("Number of days input container does not exist for the day use only container");

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
            total = tentPerDayBaseRate * numNightsInputValueAsNum;
        }

        return total;
    }
}

export default TentCalculator;