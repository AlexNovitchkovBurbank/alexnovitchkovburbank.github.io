import stringToIntConverter from "../converters/stringToIntConverter.js";

const addChaletNumPeopleToTotalCalculator = {
    Calculate() {
        const chaletNumPeopleInput = document.querySelector(
            "#num-people-input-for-chalet-checkbox"
          );

        if (chaletNumPeopleInput === null)
            throw new Error("chalet num people is null");

          const chaletNumPeople =
            stringToIntConverter.Convert(chaletNumPeopleInput.value);

            const numPeopleAccountedForInput = document.querySelector("#num-people-accounted-for");

            if (numPeopleAccountedForInput === null)
                throw new Error("num people still not accounted for input field is null");

            let numPeopleAccountedFor = numPeopleAccountedForInput.textContent;

            if (!isNaN(chaletNumPeople) && chaletNumPeople < 0) {
                return numPeopleAccountedFor + chaletNumPeople;
            }

            return numPeopleAccountedFor;
    }
}

export default addChaletNumPeopleToTotalCalculator;