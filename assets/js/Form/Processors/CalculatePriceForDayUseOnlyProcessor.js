import DayUseOnlyCalculator from "../Calculators/DayUseOnlyCalculator.js";
import DayUseOnlyTotalCostContainerCreator from "../Creators/DayUseOnlyTotalCostContainerCreator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForDayUseOnlyProcessor = {
    Process() {
        const total = DayUseOnlyCalculator.Calculate();

        if (total != 0.0) { // A way we can avoid displaying the cost with only 1 field entered in
            const priceContainer = DayUseOnlyTotalCostContainerCreator.Create(total);
            FormBodyAppender.Append(priceContainer);
        }
    }
}

export default CalculatePriceForDayUseOnlyProcessor;