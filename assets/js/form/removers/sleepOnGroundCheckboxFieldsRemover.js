const sleepOnGroundCheckboxFieldsRemover = {
  Remove() {
    const sleepOnGroundCheckboxContainer = document.querySelector("#sleep-on-ground-checkbox-container");

    if (sleepOnGroundCheckboxContainer !== null) {
      const checkbox = sleepOnGroundCheckboxContainer.firstChild;
      while (sleepOnGroundCheckboxContainer.firstChild) {
        sleepOnGroundCheckboxContainer.removeChild(sleepOnGroundCheckboxContainer.lastChild);
      }

      sleepOnGroundCheckboxContainer.appendChild(checkbox);
    }
  },
};

export default sleepOnGroundCheckboxFieldsRemover;
