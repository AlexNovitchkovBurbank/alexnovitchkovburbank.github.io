import TentCalculator from "../Calculators/TentCalculator.js";
import TentCostContainerCreator from "../Creators/TentCostContainerCreator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForTentProcessor = {
    Process() {
        const total = TentCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = TentCostContainerCreator.Create(total);
            FormBodyAppender.Append(priceContainer);
        }
    }
}

export default CalculatePriceForTentProcessor;