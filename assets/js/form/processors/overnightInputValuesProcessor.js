import overnightCostCalculator from "../calculators/overnightCostCalculator.js";
import overnightCostContainerCreator from "../creators/overnightCostContainerCreator.js";
import formBodyAppender from '../appenders/formBodyAppender.js';
import addOvernightNumPeopleToTotalCalculator from "../calculators/addOvernightNumPeopleToTotalCalculator.js";
import updatedNumPeopleAccountedForStorer from "../storers/updatedNumPeopleAccountedForStorer.js";

const overnightInputValuesProcessor = {
    Process() {
        const updatedNumPeopleAccountedFor = addOvernightNumPeopleToTotalCalculator.Calculate();

        if (updatedNumPeopleAccountedFor === null)
            throw new Error("overnight num people input field is null");

        updatedNumPeopleAccountedForStorer.Store(updatedNumPeopleAccountedFor);
        
        const total = overnightCostCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = overnightCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default overnightInputValuesProcessor;