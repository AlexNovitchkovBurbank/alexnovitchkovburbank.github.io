import stringToIntConverter from "../converters/stringToIntConverter.js";

const addSleepOnGroundNumPeopleToTotalCalculator = {
    Calculate() {
        const sleepOnGroundNumPeopleInput = document.querySelector(
            "#num-people-input-for-sleep-on-ground-checkbox"
          );

        if (sleepOnGroundNumPeopleInput === null)
            throw new Error("sleep on ground num people is null");

          const sleepOnGroundNumPeople =
            stringToIntConverter.Convert(sleepOnGroundNumPeopleInput.value);

            const numPeopleAccountedForInput = document.querySelector("#num-people-accounted-for");

            if (numPeopleAccountedForInput === null)
                throw new Error("num people still not accounted for input field is null");

            let numPeopleAccountedFor = numPeopleAccountedForInput.textContent;

            if (!isNaN(sleepOnGroundNumPeople) && sleepOnGroundNumPeople < 0) {
                return numPeopleAccountedFor + sleepOnGroundNumPeople;
            }

            return numPeopleAccountedFor;
    }
}

export default addSleepOnGroundNumPeopleToTotalCalculator;