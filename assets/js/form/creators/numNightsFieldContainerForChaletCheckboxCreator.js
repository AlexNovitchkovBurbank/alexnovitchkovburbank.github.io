const numNightsFieldContainerForChaletCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
      inputFieldContainer.className =
      "field-container";
    inputFieldContainer.id = "num-nights-field-container-for-chalet-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of nights:";
    inputLabel.htmlFor = "num-nights-input-for-chalet-checkbox";
    const input = document.createElement("input");
    input.name = "number of nights for chalet stay";
    input.id = "num-nights-input-for-chalet-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default numNightsFieldContainerForChaletCheckboxCreator;
