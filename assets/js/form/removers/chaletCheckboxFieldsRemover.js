const chaletCheckboxFieldsRemover = {
  Remove() {
    const chaletCheckboxContainer = document.querySelector(
      "#chalet-checkbox-container"
    );

    if (chaletCheckboxContainer !== null) {
      const checkbox = chaletCheckboxContainer.firstChild;
      while (chaletCheckboxContainer.firstChild) {
        chaletCheckboxContainer.removeChild(chaletCheckboxContainer.lastChild);
      }

      chaletCheckboxContainer.appendChild(checkbox);
    }
  },
};

export default chaletCheckboxFieldsRemover;
