const NumRvsFieldContainerForSleepInRvCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field";
    inputFieldContainer.id = "num-rvs-field-for-sleep-in-rv-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of RVs:";
    inputLabel.htmlFor = "num-rvs-input-for-sleep-in-rv-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-rvs";
    input.id = "num-rvs-input-for-sleep-in-rv-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumRvsFieldContainerForSleepInRvCheckboxCreator;
