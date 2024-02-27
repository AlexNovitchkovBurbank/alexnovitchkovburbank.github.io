import { RVBaseRate, RVPricesOver6People } from "../../RVPrices";

const RVStayCalculator = {
    Calculate() {
        const numRVsInput = document.querySelector("num-RVs-input-for-sleep-in-RV-checkbox");
        const numPeopleInput = document.querySelector("num-people-input-for-sleep-in-RV-checkbox");

        if (numRVsInput === null)
            throw new Error("Number of RVs does not exist for the RV container");

        if (numPeopleInput === null)
            throw new Error("Number of people does not exist for the RV container");

        let total = 0.0;

        if (numPeopleInput.textContent >= 6) {
            total = RVBaseRate + ((numPeopleInput.textContent - 6) * RVPricesOver6People);
        }
        else if (numPeopleInput.textContent === 0) {
            total = 0.0;
        }
        else {
            total = RVBaseRate + (numPeopleInput.textContent * RVPricesOver6People);
        }
    }
}

export default RVStayCalculator;