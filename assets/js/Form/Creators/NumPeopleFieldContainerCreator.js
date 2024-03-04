const NumPeopleFieldContainerCreator = {
    Create() {
      const inputFieldContainer =
        document.createElement("div");
        inputFieldContainer.className =
        "field";
      inputFieldContainer.id = "num-people-field-container";
      const inputLabel = document.createElement("label");
      inputLabel.textContent = "Number of people:";
      inputLabel.htmlFor = "num-people-input";
      const input = document.createElement("input");
      input.name = "number-of-people";
      input.id = "num-people-input";
      input.type = "number";
      input.required = true;
      inputFieldContainer.appendChild(inputLabel);
      inputFieldContainer.appendChild(input);
  
      return inputFieldContainer;
    },
  };
  
  export default NumPeopleFieldContainerCreator;