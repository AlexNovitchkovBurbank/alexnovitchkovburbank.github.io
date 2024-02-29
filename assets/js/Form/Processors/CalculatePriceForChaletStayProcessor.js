import ChaletStayCalculator from "../Calculators/ChaletStayCalculator"

const CalculatePriceForChaletStayProcessor = {
    Process() {
        let total = ChaletStayCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForChaletStayProcessor;