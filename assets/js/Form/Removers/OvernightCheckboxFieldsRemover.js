const OvernightCheckboxFieldsRemover = {
  Remove() {
    const overnightCheckboxContainer = document.querySelector("#overnight-checkbox-container");

    if (overnightCheckboxContainer !== null) {
      const checkbox = overnightCheckboxContainer.firstChild;
      while (overnightCheckboxContainer.firstChild) {
        overnightCheckboxContainer.removeChild(overnightCheckboxContainer.lastChild);
      }

      overnightCheckboxContainer.appendChild(checkbox);
    }
  },
};

export default OvernightCheckboxFieldsRemover;
