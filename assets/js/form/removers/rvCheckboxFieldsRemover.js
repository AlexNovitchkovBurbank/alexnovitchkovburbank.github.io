const rvCheckboxFieldsRemover = {
  Remove() {
    const rvCheckboxContainer = document.querySelector("#rv-checkbox-container");

    if (rvCheckboxContainer !== null) {
      const checkbox = rvCheckboxContainer.firstChild;
      while (rvCheckboxContainer.firstChild) {
        rvCheckboxContainer.removeChild(rvCheckboxContainer.lastChild);
      }

      rvCheckboxContainer.appendChild(checkbox);
    }
  },
};

export default rvCheckboxFieldsRemover;
