const NumPeopleFieldContainerForOvernightCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
      inputFieldContainer.className =
      "field-container";
    inputFieldContainer.id = "num-people-field-container-for-overnight-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of people:";
    inputLabel.htmlFor = "num-people-input-for-overnight-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-people-for-overnight";
    input.id = "num-people-input-for-overnight-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumPeopleFieldContainerForOvernightCheckboxCreator;
