import { dayUseOnlyBaseRate, dayUseOnlyPricesOver6People } from "../../ChaletPrices";

const DayUseOnlyCalculator = {
    Calculate() {
        const numDaysInput = document.querySelector("num-days-input-for-day-use-only-checkbox");
        const numPeopleInput = document.querySelector("num-people-input-for-day-use-only-checkbox");

        if (numPeopleInput === null)
            throw new Error("Number of people does not exist for the day use only container");

        if (numDaysInput === null)
            throw new Error("Number of days does not exist for the day use only container");

        let total = 0.0;

        if (numPeopleInput.textContent >= 6) {
            total = dayUseOnlyBaseRate + dayUseOnlyPricesOver6People[numPeopleInput.textContent - 6 - 1];
        }
        else if (numPeopleInput.textContent === 0) {
            total = 0.0;
        }
        else {
            total = dayUseOnlyBaseRate + dayUseOnlyPricesOver6People[numPeopleInput.textContent - 1];
        }

        return total;
    }
}

export default DayUseOnlyCalculator;