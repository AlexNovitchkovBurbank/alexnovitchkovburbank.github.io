import chaletCostCalculator from "../calculators/chaletCostCalculator.js";
import chaletCostContainerCreator from "../creators/chaletCostContainerCreator.js";
import formBodyAppender from '../appenders/formBodyAppender.js';
import addChaletNumPeopleToTotalCalculator from "../calculators/addChaletNumPeopleToTotalCalculator.js";
import updatedNumPeopleAccountedForStorer from "../storers/updatedNumPeopleAccountedForStorer.js";

const chaletInputValuesProcessor = {
    Process() {
        const updatedNumPeopleAccountedFor = addChaletNumPeopleToTotalCalculator.Calculate();

        if (updatedNumPeopleAccountedFor === null)
            throw new Error("chalet num people input field is null");

        updatedNumPeopleAccountedForStorer.Store(updatedNumPeopleAccountedFor);
        
        const total = chaletCostCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = chaletCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default chaletInputValuesProcessor;