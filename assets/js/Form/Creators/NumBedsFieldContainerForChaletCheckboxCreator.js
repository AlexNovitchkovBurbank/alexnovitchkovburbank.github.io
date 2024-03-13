const NumBedsFieldContainerForChaletCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field";
    inputFieldContainer.id = "num-beds-field-chalet-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of beds:";
    inputLabel.htmlFor = "num-beds-input-for-chalet-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-beds";
    input.id = "num-beds-input-for-chalet-checkbox";
    input.type = "number";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumBedsFieldContainerForChaletCheckboxCreator;
