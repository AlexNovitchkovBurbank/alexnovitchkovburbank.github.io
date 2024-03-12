import { OvernightPerDayBaseRate, OvernightPricesOver6People } from "../../OvernightPrices.js";
import StringToIntConverter from "../Converters/StringToIntConverter.js";

const OvernightCalculator = {
    Calculate() {
        const numNightsInput = document.querySelector("#num-nights-input-for-overnight-checkbox");
        const numPeopleInput = document.querySelector("#num-people-input-for-overnight-checkbox");
        if (numPeopleInput === null)
            throw new Error("Number of people input does not exist for the overnight stay container");

        if (numNightsInput === null)
            throw new Error("Number of nights input container does not exist for the overnight stay container");

        const numNightsInputValueAsNum = StringToIntConverter.Convert(numNightsInput.value);
        const numPeopleInputValueAsNum = StringToIntConverter.Convert(numPeopleInput.value);

        let total = 0.0;

        if (isNaN(numPeopleInputValueAsNum) || isNaN(numNightsInputValueAsNum)) {
            total = NaN;
        }
        if (numPeopleInputValueAsNum >= 6) {
            total = (OvernightPerDayBaseRate + OvernightPricesOver6People[numPeopleInputValueAsNum - 6 - 1]) * numNightsInputValueAsNum;
        }
        else if (numPeopleInputValueAsNum === 0 || numNightsInputValueAsNum === 0) {
            total = 0.0;
        }
        else {
            total = OvernightPerDayBaseRate * numNightsInputValueAsNum;
        }

        return total;
    }
}

export default OvernightCalculator;