const NumBedsFieldContainerForSleepInChaletCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field";
    inputFieldContainer.id = "num-beds-field-stay-in-chalet-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of beds:";
    inputLabel.htmlFor = "num-beds-input-for-sleep-in-chalet-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-beds";
    input.id = "num-beds-input-for-sleep-in-chalet-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumBedsFieldContainerForSleepInChaletCheckboxCreator;
