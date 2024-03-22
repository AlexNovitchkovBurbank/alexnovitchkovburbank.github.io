import addSleepOnGroundNumPeopleToTotalCalculator from "../calculators/addSleepOnGroundNumPeopleToTotalCalculator.js";
import updatedNumPeopleAccountedForStorer from "../storers/updatedNumPeopleAccountedForStorer.js";

const sleepOnGroundInputValuesProcessor = {
    Process() {
        const updatedNumPeopleAccountedFor = addSleepOnGroundNumPeopleToTotalCalculator.Calculate();

        if (updatedNumPeopleAccountedFor === null)
            throw new Error("sleep on ground num people input field is null");

        updatedNumPeopleAccountedForStorer.Store(updatedNumPeopleAccountedFor);
    }
}

export default sleepOnGroundInputValuesProcessor;