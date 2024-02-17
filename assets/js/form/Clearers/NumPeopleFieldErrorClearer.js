const NumPeopleFieldErrorClearer = {
    Clear() {
        const mainNumPeopleField = document.querySelector("#num-people-input");
        mainNumPeopleField.classList.remove("input-error");
    }
}

export default NumPeopleFieldErrorClearer;