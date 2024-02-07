const ClearNumPeopleFieldFormatting = {
    Clear() {
        const mainNumPeopleField = document.querySelector("#num-people-input");
        mainNumPeopleField.classList.remove("input-error");
    }
}