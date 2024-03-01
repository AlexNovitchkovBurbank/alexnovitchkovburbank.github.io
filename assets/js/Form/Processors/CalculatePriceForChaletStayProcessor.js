import ChaletStayCalculator from "../Calculators/ChaletStayCalculator.js";
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const CalculatePriceForChaletStayProcessor = {
    Process() {
        let total = ChaletStayCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForChaletStayProcessor;