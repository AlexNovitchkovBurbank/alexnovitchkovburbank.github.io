import TentStayCalculator from "../Calculators/TentStayCalculator"

const CalculatePriceForTentStayProcessor = {
    Process() {
        let total = TentStayCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForTentStayProcessor;