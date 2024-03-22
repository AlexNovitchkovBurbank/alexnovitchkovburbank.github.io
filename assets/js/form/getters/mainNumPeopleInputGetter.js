const mainNumPeopleInputGetter = {
    Get() {
        const numPeopleInput = document.querySelector("#num-people-input");
        if (numPeopleInput === null)
            throw new Error("The number of people input field is null");

        return numPeopleInput.value;
    }
}

export default mainNumPeopleInputGetter;