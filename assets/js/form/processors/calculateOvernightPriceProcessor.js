import overnightCalculator from "../../form/calculators/overnightCalculator.js";
import overnightCostContainerCreator from "../../form/creators/overnightCostContainerCreator.js";
import formBodyAppender from '../../form/appenders/formBodyAppender.js';

const calculateOvernightPriceProcessor = {
    Process() {
        const total = overnightCalculator.Calculate();

        if (!isNaN(total)) { // A way we can avoid displaying the cost with only 1 field-container entered in
            const priceContainer = overnightCostContainerCreator.Create(total);
            formBodyAppender.Append(priceContainer);
        }
    }
}

export default calculateOvernightPriceProcessor;