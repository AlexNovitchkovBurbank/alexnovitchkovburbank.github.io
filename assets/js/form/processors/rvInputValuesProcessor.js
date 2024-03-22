import rvCpstCalculator from "../calculators/rvCostCalculator.js";
import rvCostContainerCreator from "../creators/rvCostContainerCreator.js";
import formBodyAppender from '../appenders/formBodyAppender.js';
import addRvNumPeopleToTotalCalculator from "../calculators/addRvNumPeopleToTotalCalculator.js";
import updatedNumPeopleAccountedForStorer from "../storers/updatedNumPeopleAccountedForStorer.js";

const rvInputValuesProcessor = {
    Process() {
        const updatedNumPeopleAccountedFor = addRvNumPeopleToTotalCalculator.Calculate();

        if (updatedNumPeopleAccountedFor === null)
            throw new Error("tent num people input field is null");

        updatedNumPeopleAccountedForStorer.Store(updatedNumPeopleAccountedFor);
        
        const total = rvCpstCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = rvCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default rvInputValuesProcessor;