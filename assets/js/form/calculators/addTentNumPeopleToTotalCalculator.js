import stringToIntConverter from "../converters/stringToIntConverter.js";

const addTentNumPeopleToTotalCalculator = {
    Calculate() {
        const tentNumPeopleInput = document.querySelector(
            "#num-people-input-for-tent-checkbox"
          );

        if (tentNumPeopleInput === null)
            throw new Error("tent num people is null");

          const tentNumPeople =
            stringToIntConverter.Convert(tentNumPeopleInput.value);

            const numPeopleAccountedForInput = document.querySelector("#num-people-accounted-for");

            if (numPeopleAccountedForInput === null)
                throw new Error("num people still not accounted for input field is null");

            let numPeopleAccountedFor = stringToIntConverter.Convert(numPeopleAccountedForInput.value);

            if (isNaN(numPeopleAccountedFor))
                throw new Error("The number of people accounted for is not a number");

            if (!isNaN(tentNumPeople) && tentNumPeople < 0) {
                return numPeopleAccountedFor + tentNumPeople;
            }

            return numPeopleAccountedFor;
    }
}

export default addTentNumPeopleToTotalCalculator;