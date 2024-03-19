const numPeopleFieldContainerCreator = {
    Create() {
      const inputFieldContainer =
        document.createElement("div");
        inputFieldContainer.className =
        "field-container";
      inputFieldContainer.id = "num-people-field-container";
      const inputLabel = document.createElement("label");
      inputLabel.textContent = "Number of people:";
      inputLabel.htmlFor = "num-people-input";
      const input = document.createElement("input");
      input.name = "number-of-people";
      input.id = "num-people-input";
      input.required = true;
      inputFieldContainer.appendChild(inputLabel);
      inputFieldContainer.appendChild(input);
  
      return inputFieldContainer;
    },
  };
  
  export default numPeopleFieldContainerCreator;