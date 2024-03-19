const NumTentsFieldContainerForTentCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field-container";
    inputFieldContainer.id = "num-tents-field-container-for-tent-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of tents:";
    inputLabel.htmlFor = "num-tents-input-for-tent-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-tents";
    input.id = "num-tents-input-for-tent-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumTentsFieldContainerForTentCheckboxCreator;
