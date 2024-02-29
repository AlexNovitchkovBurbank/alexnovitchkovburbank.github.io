import RvStayCalculator from "../Calculators/RvStayCalculator"

const CalculatePriceForRvStayProcessor = {
    Process() {
        let total = RvStayCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForRvStayProcessor;