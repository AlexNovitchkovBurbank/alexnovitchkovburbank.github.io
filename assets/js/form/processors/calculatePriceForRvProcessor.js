import rvCalculator from "../../form/Calculators/rvCalculator.js";
import rvCostContainerCreator from "../../form/Creators/rvCostContainerCreator.js";
import formBodyAppender from '../../form/Appenders/formBodyAppender.js';

const calculatePriceForRvProcessor = {
    Process() {
        const total = rvCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = rvCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default calculatePriceForRvProcessor;