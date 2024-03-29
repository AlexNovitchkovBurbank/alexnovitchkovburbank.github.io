const updatedNumPeopleAccountedForStorer = {
    Store(updatedNumPeopleAccountedFor) {
        const numPeopleAccountedForInput = document.querySelector("#num-people-accounted-for");

        if (numPeopleAccountedForInput === null)
            throw new Error("num people accounted form input field is null");

        numPeopleAccountedForInput.value = String(updatedNumPeopleAccountedFor);
    }
}

export default updatedNumPeopleAccountedForStorer;