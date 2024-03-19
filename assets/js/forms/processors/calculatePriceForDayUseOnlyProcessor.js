import dayUseOnlyCalculator from "../../form/Calculators/dayUseOnlyCalculator.js";
import dayUseOnlyCostContainerCreator from "../../form/Creators/dayUseOnlyCostContainerCreator.js";
import formBodyAppender from '../../form/Appenders/formBodyAppender.js';

const calculatePriceForDayUseOnlyProcessor = {
    Process() {
        const total = dayUseOnlyCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = dayUseOnlyCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default calculatePriceForDayUseOnlyProcessor;