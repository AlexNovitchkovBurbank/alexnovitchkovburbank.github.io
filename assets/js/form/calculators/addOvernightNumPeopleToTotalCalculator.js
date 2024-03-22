import stringToIntConverter from "../converters/stringToIntConverter.js";

const addOvernightNumPeopleToTotalCalculator = {
    Calculate() {
        const overnightNumPeopleInput = document.querySelector(
            "#num-people-input-for-overnight-checkbox"
          );

        if (overnightNumPeopleInput === null)
            throw new Error("overnight num people is null");

          const overnightNumPeople =
            stringToIntConverter.Convert(overnightNumPeopleInput.value);

            const numPeopleAccountedForInput = document.querySelector("#num-people-accounted-for");

            if (numPeopleAccountedForInput === null)
                throw new Error("num people still not accounted for input field is null");

            let numPeopleAccountedFor = stringToIntConverter.Convert(numPeopleAccountedForInput.value);

            if (isNaN(numPeopleAccountedFor))
                throw new Error("The number of people accounted for is not a number");

            if (!isNaN(overnightNumPeople) && overnightNumPeople < 0) {
                return numPeopleAccountedFor + overnightNumPeople;
            }

            return numPeopleAccountedFor;
    }
}

export default addOvernightNumPeopleToTotalCalculator;