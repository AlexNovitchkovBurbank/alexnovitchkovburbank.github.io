import stringToIntConverter from "../converters/stringToIntConverter.js";

const addDayUseOnlyNumPeopleToTotalCalculator = {
    Calculate() {
        const dayUseOnlyNumPeopleInput = document.querySelector(
            "#num-people-input-for-day-use-only-checkbox"
          );

        if (dayUseOnlyNumPeopleInput === null)
            throw new Error("day use only num people is null");

          const dayUseOnlyNumPeople =
            stringToIntConverter.Convert(dayUseOnlyNumPeopleInput.value);

            const numPeopleAccountedForInput = document.querySelector("#num-people-accounted-for");

            if (numPeopleAccountedForInput === null)
                throw new Error("num people still not accounted for input field is null");

            let numPeopleAccountedFor = numPeopleAccountedForInput.textContent;

            if (!isNaN(dayUseOnlyNumPeople) && dayUseOnlyNumPeople < 0) {
                return numPeopleAccountedFor + dayUseOnlyNumPeople;
            }

            return numPeopleAccountedFor;
    }
}

export default addDayUseOnlyNumPeopleToTotalCalculator;