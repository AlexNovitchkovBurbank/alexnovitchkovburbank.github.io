import { rvBaseRate, rvPricesOver6People } from "../../RvPrices";

const RvStayCalculator = {
    Calculate() {
        const numRvsInput = document.querySelector("num-rvs-input-for-sleep-in-rv-checkbox");
        const numPeopleInput = document.querySelector("num-people-input-for-sleep-in-rv-checkbox");

        if (numRvsInput === null)
            throw new Error("Number of RVs does not exist for the rv container");

        if (numPeopleInput === null)
            throw new Error("Number of people does not exist for the rv container");

        let total = 0.0;

        if (numPeopleInput.textContent >= 6) {
            total = rvBaseRate + rvPricesOver6People[numPeopleInput.textContent - 6 - 1];
        }
        else if (numPeopleInput.textContent === 0) {
            total = 0.0;
        }
        else {
            total = rvBaseRate + rvPricesOver6People[numPeopleInput.textContent - 1];
        }
    }
}

export default RvStayCalculator;