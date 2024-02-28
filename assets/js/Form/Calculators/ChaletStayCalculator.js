import { chaletBaseRate, chaletPricesOver6People } from "../../ChaletPrices";

const ChaletStayCalculator = {
    Calculate() {
        const numBedsInput = document.querySelector("num-beds-input-for-sleep-in-chalet-checkbox");
        const numPeopleInput = document.querySelector("num-people-input");

        if (numBedsInput === null)
            throw new Error("Number of beds does not exist for the chalet container");

        if (numPeopleInput === null)
            throw new Error("Number of people does not exist for the chalet container");

        let total = 0.0;

        if (numPeopleInput.textContent >= 6) {
            total = chaletBaseRate + chaletPricesOver6People[numPeopleInput.textContent - 6 - 1];
        }
        else if (numPeopleInput.textContent === 0) {
            total = 0.0;
        }
        else {
            total = chaletBaseRate + chaletPricesOver6People[numPeopleInput.textContent - 1];
        }
    }
}

export default ChaletStayCalculator;