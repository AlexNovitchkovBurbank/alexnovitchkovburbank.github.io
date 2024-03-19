import { dayUseOnlyBaseRate, dayUseOnlyPricesOver6People } from "../../dayUseOnlyPrices.js";
import stringToIntConverter from "../converters/stringToIntConverter.js";

const dayUseOnlyCalculator = {
    Calculate() {
        const numDaysInput = document.querySelector("#num-days-input-for-day-use-only-checkbox");
        const numPeopleInput = document.querySelector("#num-people-input-for-day-use-only-checkbox");

        if (numPeopleInput === null)
            throw new Error("Number of people input does not exist for the day use only container");

        if (numDaysInput === null)
            throw new Error("Number of days input does not exist for the day use only container");

        const numDaysInputValueAsNum = stringToIntConverter.Convert(numDaysInput.value);
        const numPeopleInputValueAsNum = stringToIntConverter.Convert(numPeopleInput.value);

        let total = 0.0;

        if (isNaN(numPeopleInputValueAsNum) || isNaN(numDaysInputValueAsNum)) {
            total = NaN;
        }
        if (numPeopleInputValueAsNum > 6 && numPeopleInputValueAsNum <= 13) {
            total = (dayUseOnlyBaseRate + dayUseOnlyPricesOver6People[(numPeopleInputValueAsNum - 1) - 6]) * numDaysInputValueAsNum;
        }
        else if (numPeopleInputValueAsNum > 0 && numPeopleInputValueAsNum <= 6) {
            total = dayUseOnlyBaseRate * numDaysInputValueAsNum;
        } else {
            total = NaN;
          }

        return total;
    }
}

export default dayUseOnlyCalculator;