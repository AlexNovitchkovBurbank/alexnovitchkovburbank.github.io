const numNightsFieldContainerForTentCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field-container";
    inputFieldContainer.id = "num-nights-field-container-for-tent-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of nights:";
    inputLabel.htmlFor = "num-nights-input-for-tent-checkbox";
    const input = document.createElement("input");
    input.name = "number of nights for tent stay";
    input.id = "num-nights-input-for-tent-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default numNightsFieldContainerForTentCheckboxCreator;
