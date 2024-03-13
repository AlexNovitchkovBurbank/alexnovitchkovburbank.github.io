import { dayUseOnlyBaseRate, dayUseOnlyPricesOver6People } from "../../DayUseOnlyPrices.js";
import StringToIntConverter from "../Converters/StringToIntConverter.js";

const DayUseOnlyCalculator = {
    Calculate() {
        const numDaysInput = document.querySelector("#num-nights-input-for-chalet-checkbox");
        const numPeopleInput = document.querySelector("#num-beds-input-for-chalet-checkbox");

        if (numPeopleInput === null)
            throw new Error("Number of people input does not exist for the chalet container");

        if (numDaysInput === null)
            throw new Error("Number of days input does not exist for the chalet container");

        const numDaysInputValueAsNum = StringToIntConverter.Convert(numDaysInput.value);
        const numPeopleInputValueAsNum = StringToIntConverter.Convert(numPeopleInput.value);

        let total = 0.0;

        if (isNaN(numPeopleInputValueAsNum) || isNaN(numDaysInputValueAsNum)) {
            total = NaN;
        }
        if (numPeopleInputValueAsNum >= 6) {
            total = (dayUseOnlyBaseRate + dayUseOnlyPricesOver6People[numPeopleInputValueAsNum - 6 - 1]) * numDaysInputValueAsNum;
        }
        else if (numPeopleInputValueAsNum === 0 || numDaysInputValueAsNum === 0) {
            total = 0.0;
        }
        else {
            total = dayUseOnlyBaseRate * numDaysInputValueAsNum;
        }

        return total;
    }
}

export default DayUseOnlyCalculator;