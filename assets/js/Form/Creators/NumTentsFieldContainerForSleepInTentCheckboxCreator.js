const NumTentsFieldContainerForSleepIntentCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field";
    inputFieldContainer.id = "num-tents-field-for-sleep-in-tent-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of tents:";
    inputLabel.htmlFor = "num-tents-input-for-sleep-in-tent-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-tents";
    input.id = "num-tents-input-for-sleep-in-tent-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumTentsFieldContainerForSleepIntentCheckboxCreator;
