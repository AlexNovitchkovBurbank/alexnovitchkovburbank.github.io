import tentCalculator from "../../form/Calculators/tentCalculator.js";
import tentCostContainerCreator from "../../form/Creators/tentCostContainerCreator.js";
import formBodyAppender from '../../form/Appenders/formBodyAppender.js';

const calculatePriceForTentProcessor = {
    Process() {
        const total = tentCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = tentCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default calculatePriceForTentProcessor;