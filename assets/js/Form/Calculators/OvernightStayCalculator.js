import { overnightBaseRate, overnightPricesOver6People } from "../../OvernightPrices";

const OvernightStayCalculator = {
    Calculate() {
        const numNightsInput = document.querySelector("num-nights-input-for-overnight-stay-checkbox");
        const numPeopleInput = document.querySelector("num-people-input");

        if (numPeopleInput === null)
            throw new Error("Number of people input does not exist for the day use only container");

        if (numNightsInput === null)
            throw new Error("Number of nights input container does not exist for the day use only container");

        let total = 0.0;

        if (numPeopleInput.textContent >= 6) {
            total = overnightBaseRate + overnightPricesOver6People[numPeopleInput.textContent - 6 - 1];
        }
        else if (numPeopleInput.textContent === 0) {
            total = 0.0;
        }
        else {
            total = overnightBaseRate + overnightPricesOver6People[numPeopleInput.textContent - 1];
        }

        return total;
    }
}

export default OvernightStayCalculator;