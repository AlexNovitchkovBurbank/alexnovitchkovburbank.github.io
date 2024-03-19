import chaletCalculator from "../../form/Calculators/chaletCalculator.js";
import chaletCostContainerCreator from "../creators/chaletCostContainerCreator.js";
import formBodyAppender from '../../form/Appenders/formBodyAppender.js';

const calculatePriceForChaletProcessor = {
    Process() {
        const total = chaletCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = chaletCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default calculatePriceForChaletProcessor;