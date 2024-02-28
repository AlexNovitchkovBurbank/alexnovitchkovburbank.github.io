import DayUseOnlyCalculator from "../Calculators/DayUseOnlyStayCalculator"

const CalculatePriceForDayUseOnlyProcessor = {
    Process() {
        let total = DayUseOnlyCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForDayUseOnlyProcessor;