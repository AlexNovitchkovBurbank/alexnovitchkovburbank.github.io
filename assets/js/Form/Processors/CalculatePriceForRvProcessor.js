import RvCalculator from "../Calculators/RvCalculator.js";
import RvCostContainerCreator from "../Creators/RvCostContainerCreator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForRvProcessor = {
    Process() {
        const total = RvCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = RvCostContainerCreator.Create(total);
            FormBodyAppender.Append(priceContainer);
        }
    }
}

export default CalculatePriceForRvProcessor;