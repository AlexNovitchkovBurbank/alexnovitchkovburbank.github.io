import {tentPricesOver6People, tentBaseRate} from "../../tentPrices";

const tentPriceCalculator = {
    Calculate(numPeople) {
        if (!Number.parseInt(numPeople))
            throw new Error("Number of people for tent is not a number");

        let totalCostFortenttay = 0;
        
        if (numPeople > 6) {
            const numPeopleOver6 = numPeople - 6;
            totalCostFortenttay = tentPricesOver6People[numPeopleOver6];
          }
          else {
            totalCostFortenttay = tentBaseRate;
          }

          return totalCostFortenttay;
    }
}

export default tentPriceCalculator;