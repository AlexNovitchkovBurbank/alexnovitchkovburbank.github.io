import OvernightCalculator from "../Calculators/OvernightCalculator.js";
import OvernightCostContainerCreator from "../Creators/OvernightCostContainerCreator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculateOvernightPriceProcessor = {
    Process() {
        const total = OvernightCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = OvernightCostContainerCreator.Create(total);
            FormBodyAppender.Append(priceContainer);
        }
    }
}

export default CalculateOvernightPriceProcessor;