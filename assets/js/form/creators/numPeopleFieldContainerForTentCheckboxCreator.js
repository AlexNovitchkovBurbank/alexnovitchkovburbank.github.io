const numPeopleFieldContainerForTentCheckboxCreator = {
    Create() {
      const inputFieldContainer =
        document.createElement("div");
        inputFieldContainer.className =
        "field-container";
      inputFieldContainer.id = "num-people-field-container-for-tent-checkbox";
      const inputLabel = document.createElement("label");
      inputLabel.textContent = "Number of people:";
      inputLabel.htmlFor = "num-people-input-for-tent-checkbox";
      const input = document.createElement("input");
      input.name = "number of people for tent stay";
      input.id = "num-people-input-for-tent-checkbox";
      input.required = true;
      inputFieldContainer.appendChild(inputLabel);
      inputFieldContainer.appendChild(input);
  
      return inputFieldContainer;
    },
  };
  
  export default numPeopleFieldContainerForTentCheckboxCreator;