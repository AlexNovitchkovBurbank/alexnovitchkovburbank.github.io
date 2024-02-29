import DayUseOnlyCalculator from "../Calculators/DayUseOnlyCalculator"

const CalculatePriceForDayUseOnlyProcessor = {
    Process() {
        let total = DayUseOnlyCalculator.Calculate();
        FormBodyAppender.Append(total);
    }
}

export default CalculatePriceForDayUseOnlyProcessor;