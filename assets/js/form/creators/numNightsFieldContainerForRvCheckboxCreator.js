const numNightsFieldContainerForRvCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
      inputFieldContainer.className =
      "field-container";
    inputFieldContainer.id = "num-nights-field-container-for-rv-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of nights:";
    inputLabel.htmlFor = "num-nights-input-for-rv-checkbox";
    const input = document.createElement("input");
    input.name = "number of nights for rv stay";
    input.id = "num-nights-input-for-rv-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default numNightsFieldContainerForRvCheckboxCreator;
