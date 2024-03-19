import DayUseOnlyCalculator from "../Calculators/DayUseOnlyCalculator.js";
import DayUseOnlyCostContainerCreator from "../Creators/DayUseOnlyCostContainerCreator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForDayUseOnlyProcessor = {
    Process() {
        const total = DayUseOnlyCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = DayUseOnlyCostContainerCreator.Create(total);
            FormBodyAppender.Append(priceContainer);
        }
    }
}

export default CalculatePriceForDayUseOnlyProcessor;