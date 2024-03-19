const numNightsFieldContainerForSleepOnGroundCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field-container";
    inputFieldContainer.id = "num-days-field-container-chalet-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of days:";
    inputLabel.htmlFor = "num-days-input-for-sleep-on-ground-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-days-sleeping-on-the-ground";
    input.id = "num-days-input-for-sleep-on-ground-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default numNightsFieldContainerForSleepOnGroundCheckboxCreator;
