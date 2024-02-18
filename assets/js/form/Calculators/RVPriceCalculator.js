import {rvPricesOver6People, rvBaseRate} from "../../rvPrices";

const RVPriceCalculator = {
    Calculate(numPeople) {
        if (!Number.parseInt(numPeople))
            throw new Error("Number of people for rv is not a number");

        let totalCostForRvStay = 0;
        
        if (numPeople > 6) {
            const numPeopleOver6 = numPeople - 6;
            totalCostForRvStay = rvPricesOver6People[numPeopleOver6];
          }
          else {
            totalCostForRvStay = rvBaseRate;
          }

          return totalCostForRvStay;
    }
}

export default RVPriceCalculator;