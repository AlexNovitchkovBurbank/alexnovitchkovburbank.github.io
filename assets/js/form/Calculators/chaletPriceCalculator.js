import {chaletPricesOver6People, chaletBaseRate} from "../../chaletPrices";

const chaletPriceCalculator = {
    Calculate(numPeople) {
        if (!Number.parseInt(numPeople))
            throw new Error("Number of people for chalet is not a number");

        let totalCostForChaletStay = 0;

        if (numPeople > 6) {
            const numPeopleOver6 = numPeople - 6;
            totalCostForChaletStay = chaletPricesOver6People[numPeopleOver6];
          }
          else {
            totalCostForChaletStay = chaletBaseRate;
          }

          return totalCostForChaletStay;
    }
}

export default chaletPriceCalculator;