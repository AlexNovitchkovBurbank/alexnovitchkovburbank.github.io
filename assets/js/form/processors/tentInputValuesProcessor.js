import tentCostCalculator from "../calculators/tentCostCalculator.js";
import tentCostContainerCreator from "../creators/tentCostContainerCreator.js";
import formBodyAppender from '../appenders/formBodyAppender.js';
import addTentNumPeopleToTotalCalculator from "../calculators/addTentNumPeopleToTotalCalculator.js";
import updatedNumPeopleAccountedForStorer from "../storers/updatedNumPeopleAccountedForStorer.js";

const tentInputValuesProcessor = {
    Process() {
        const updatedNumPeopleAccountedFor = addTentNumPeopleToTotalCalculator.Calculate();

        if (updatedNumPeopleAccountedFor === null)
            throw new Error("tent num people input field is null");

        updatedNumPeopleAccountedForStorer.Store(updatedNumPeopleAccountedFor);
        
        const total = tentCostCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = tentCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default tentInputValuesProcessor;