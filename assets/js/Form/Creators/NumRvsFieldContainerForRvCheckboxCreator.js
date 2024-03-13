const NumRvsFieldContainerForRvCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field";
    inputFieldContainer.id = "num-rvs-field-for-rv-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of RVs:";
    inputLabel.htmlFor = "num-rvs-input-for-rv-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-rvs";
    input.id = "num-rvs-input-for-rv-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumRvsFieldContainerForRvCheckboxCreator;
