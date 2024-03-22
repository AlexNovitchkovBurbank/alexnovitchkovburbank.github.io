import dayUseOnlyCostCalculator from "../calculators/dayUseOnlyCostCalculator.js";
import dayUseOnlyCostContainerCreator from "../creators/dayUseOnlyCostContainerCreator.js";
import formBodyAppender from '../appenders/formBodyAppender.js';
import addDayUseOnlyNumPeopleToTotalCalculator from "../calculators/addDayUseOnlyNumPeopleToTotalCalculator.js";
import updatedNumPeopleAccountedForStorer from "../storers/updatedNumPeopleAccountedForStorer.js";

const dayUseOnlyInputValuesProcessor = {
    Process() {
        const updatedNumPeopleAccountedFor = addDayUseOnlyNumPeopleToTotalCalculator.Calculate();

        if (updatedNumPeopleAccountedFor === null)
            throw new Error("day use only num people input field is null");

        updatedNumPeopleAccountedForStorer.Store(updatedNumPeopleAccountedFor);
        
        const total = dayUseOnlyCostCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = dayUseOnlyCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default dayUseOnlyInputValuesProcessor;