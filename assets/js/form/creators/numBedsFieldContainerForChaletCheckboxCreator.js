const numBedsFieldContainerForChaletCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field-container";
    inputFieldContainer.id = "num-beds-field-container-for-chalet-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of beds:";
    inputLabel.htmlFor = "num-beds-input-for-chalet-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-beds";
    input.id = "num-beds-input-for-chalet-checkbox";
    input.textContent = "5";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default numBedsFieldContainerForChaletCheckboxCreator;
