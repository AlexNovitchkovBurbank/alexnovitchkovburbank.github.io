import DayUseOnlyCalculator from "../Calculators/DayUseOnlyCalculator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForDayUseOnlyProcessor = {
    Process() {
        let total = DayUseOnlyCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForDayUseOnlyProcessor;