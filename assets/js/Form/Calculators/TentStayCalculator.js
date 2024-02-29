import { tentBaseRate, tentPricesOver6People } from "../../TentPrices";

const TentStayCalculator = {
    Calculate() {
        const numTentsInput = document.querySelector("num-tents-input-for-sleep-in-tent-checkbox");
        const numPeopleInput = document.querySelector("num-people-input");

        if (numTentsInput === null)
            throw new Error("Number of tents input does not exist for the tent container");

        if (numPeopleInput === null)
            throw new Error("Number of people input does not exist for the tent container");

        let total = 0.0;

        if (numPeopleInput.textContent >= 6) {
            total = tentBaseRate + tentPricesOver6People[numPeopleInput.textContent - 6 - 1];
        }
        else if (numPeopleInput.textContent === 0) {
            total = 0.0;
        }
        else {
            total = tentBaseRate + tentPricesOver6People[numPeopleInput.textContent - 1];
        }
    }
}

export default TentStayCalculator;