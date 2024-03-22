import { overnightPricesOver6People, overnightBaseRate } from "../../overnightPrices.js";
import stringToIntConverter from "../converters/stringToIntConverter.js";

const overnightCostCalculator = {
    Calculate() {
        const numNightsInput = document.querySelector("#num-nights-input-for-overnight-checkbox");
        const numPeopleInput = document.querySelector("#num-people-input-for-overnight-checkbox");

        if (numPeopleInput === null)
            throw new Error("Number of people input field does not exist for the overnight container");

        if (numNightsInput === null)
            throw new Error("Number of nights input field does not exist for the overnight container");

        let numNightsInputValueAsNum = stringToIntConverter.Convert(numNightsInput.value);
        let numPeopleInputValueAsNum = stringToIntConverter.Convert(numPeopleInput.value);

        let total = 0.0;

        if (isNaN(numNightsInputValueAsNum)) {
            numNightsInputValueAsNum = 5;
        }

        if (isNaN(numPeopleInputValueAsNum)) {
            total = NaN;
        }
        else {
            if (numPeopleInputValueAsNum > 6 && numPeopleInputValueAsNum <= 13) {
                total = (overnightBaseRate + overnightPricesOver6People[(numPeopleInputValueAsNum - 1) - 6]) * numNightsInputValueAsNum;
            }
            else if (numPeopleInputValueAsNum <= 6 && numPeopleInputValueAsNum > 0) {
                total = overnightBaseRate * numNightsInputValueAsNum;
            }
            else
                total = NaN;
        }

        return total;
    }
}

export default overnightCostCalculator;