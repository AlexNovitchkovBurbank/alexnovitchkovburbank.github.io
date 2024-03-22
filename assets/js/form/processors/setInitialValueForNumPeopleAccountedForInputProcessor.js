import updatedNumPeopleAccountedForStorer from "../storers/updatedNumPeopleAccountedForStorer.js"

const setInitialValueForNumPeopleAccountedForInputProcessor = {
    Process() {
        updatedNumPeopleAccountedForStorer.Store(0);
    }
}

export default setInitialValueForNumPeopleAccountedForInputProcessor;