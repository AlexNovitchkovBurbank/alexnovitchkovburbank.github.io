import RvStayCalculator from "../Calculators/RvStayCalculator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForRvStayProcessor = {
    Process() {
        let total = RvStayCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForRvStayProcessor;