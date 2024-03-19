const numPeopleInputErrorRemover = {
    Remove(numPeopleInputId) {
        const numPeopleInput = document.querySelector(`#${numPeopleInputId}`);
        numPeopleInput.classList.remove("input-error");
    }
}

export default numPeopleInputErrorRemover;