import OvernightStayCalculator from "../Calculators/OvernightStayCalculator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForOvernightStayProcessor = {
    Process() {
        let total = OvernightStayCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForOvernightStayProcessor;