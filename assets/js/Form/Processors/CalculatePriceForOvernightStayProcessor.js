import OvernightStayCalculator from "../Calculators/OvernightStayCalculator"

const CalculatePriceForOvernightStayProcessor = {
    Process() {
        let total = OvernightStayCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForOvernightStayProcessor;