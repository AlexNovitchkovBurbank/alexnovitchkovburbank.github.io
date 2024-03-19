import ChaletCalculator from "../Calculators/ChaletCalculator.js";
import ChaletCostContainerCreator from "../Creators/ChaletCostContainerCreator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForChaletProcessor = {
    Process() {
        const total = ChaletCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = ChaletCostContainerCreator.Create(total);
            FormBodyAppender.Append(priceContainer);
        }
    }
}

export default CalculatePriceForChaletProcessor;