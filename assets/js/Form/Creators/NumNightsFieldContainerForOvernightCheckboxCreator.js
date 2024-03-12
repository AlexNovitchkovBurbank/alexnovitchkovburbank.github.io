const NumNightsFieldContainerForOvernightCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
      inputFieldContainer.className =
      "field";
    inputFieldContainer.id = "num-nights-field-for-overnight-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of nights:";
    inputLabel.htmlFor = "num-nights-input-for-overnight-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-nights-for-overnight";
    input.id = "num-nights-input-for-overnight-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumNightsFieldContainerForOvernightCheckboxCreator;
