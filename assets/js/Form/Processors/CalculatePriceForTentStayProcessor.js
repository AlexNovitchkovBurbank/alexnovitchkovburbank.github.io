import TentStayCalculator from "../Calculators/TentStayCalculator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForTentStayProcessor = {
    Process() {
        let total = TentStayCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForTentStayProcessor;