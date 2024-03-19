const numPeopleFieldContainerForDayUseOnlyCheckboxCreator = {
    Create() {
      const inputFieldContainer =
        document.createElement("div");
      inputFieldContainer.className =
        "field-container";
      inputFieldContainer.id = "num-people-field-container-for-day-use-only-checkbox";
      const inputLabel = document.createElement("label");
      inputLabel.textContent = "Number of people:";
      inputLabel.htmlFor = "num-people-input-for-day-use-only-checkbox";
      const input = document.createElement("input");
      input.name = "number-of-people-for-day-use-only";
      input.id = "num-people-input-for-day-use-only-checkbox";
      input.required = true;
      inputFieldContainer.appendChild(inputLabel);
      inputFieldContainer.appendChild(input);

      return inputFieldContainer;
    },
  };
  
  export default numPeopleFieldContainerForDayUseOnlyCheckboxCreator;