import stringToIntConverter from "../converters/stringToIntConverter.js";

const addRvNumPeopleToTotalCalculator = {
    Calculate() {
        const rvNumPeopleInput = document.querySelector(
            "#num-people-input-for-rv-checkbox"
          );

        if (rvNumPeopleInput === null)
            throw new Error("rv num people is null");

          const rvNumPeople =
            stringToIntConverter.Convert(rvNumPeopleInput.value);

            const numPeopleAccountedForInput = document.querySelector("#num-people-accounted-for");

            if (numPeopleAccountedForInput === null)
                throw new Error("num people still not accounted for input field is null");

            let numPeopleAccountedFor = stringToIntConverter.Convert(numPeopleAccountedForInput.value);

            if (isNaN(numPeopleAccountedFor))
                throw new Error("The number of people accounted for is not a number");

            if (!isNaN(rvNumPeople) && rvNumPeople < 0) {
                return numPeopleAccountedFor + rvNumPeople;
            }

            return numPeopleAccountedFor;
    }
}

export default addRvNumPeopleToTotalCalculator;