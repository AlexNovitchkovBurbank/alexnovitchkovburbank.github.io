const NumPeopleInputErrorRemover = {
    Remove(numPeopleInputId) {
        const numPeopleInput = document.querySelector(`#${numPeopleInputId}`);
        numPeopleInput.classList.remove("input-error");
    }
}

export default NumPeopleInputErrorRemover;