const NumPeopleFieldContainerForSleepOnGroundCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field-container";
    inputFieldContainer.id = "num-people-field-container-chalet-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of people:";
    inputLabel.htmlFor = "num-people-input-for-sleep-on-ground-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-people-sleeping-on-the-ground";
    input.id = "num-people-input-for-sleep-on-ground-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumPeopleFieldContainerForSleepOnGroundCheckboxCreator;
