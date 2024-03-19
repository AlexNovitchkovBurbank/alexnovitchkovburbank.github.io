const TentCheckboxFieldsRemover = {
  Remove() {
    const tentCheckboxContainer = document.querySelector(
      "#tent-checkbox-container"
    );
    if (tentCheckboxContainer !== null) {
        const checkbox = tentCheckboxContainer.firstChild;
        while (tentCheckboxContainer.firstChild) {
          tentCheckboxContainer.removeChild(tentCheckboxContainer.lastChild);
        }
  
        tentCheckboxContainer.appendChild(checkbox);
    }
  },
};

export default TentCheckboxFieldsRemover;
