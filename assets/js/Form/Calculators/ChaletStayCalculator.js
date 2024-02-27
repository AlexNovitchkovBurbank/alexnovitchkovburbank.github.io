import { chaletBaseRate, chaletPricesOver6People } from "../../ChaletPrices";

const ChaletStayCalculator = {
    Calculate() {
        const numBedsInput = document.querySelector("num-beds-input-for-sleep-in-chalet-checkbox");
        const numPeopleInput = document.querySelector("num-people-input-for-sleep-in-chalet-checkbox");

        if (numBedsInput === null)
            throw new Error("Number of beds does not exist for the chalet container");

        if (numPeopleInput === null)
            throw new Error("Number of people does not exist for the chalet container");

        let total = 0.0;

        if (numPeopleInput.textContent >= 6) {
            total = chaletBaseRate + ((numPeopleInput.textContent - 6) * chaletPricesOver6People);
        }
        else if (numPeopleInput.textContent === 0) {
            total = 0.0;
        }
        else {
            total = chaletBaseRate + (numPeopleInput.textContent * chaletPricesOver6People);
        }
    }
}

export default ChaletStayCalculator;