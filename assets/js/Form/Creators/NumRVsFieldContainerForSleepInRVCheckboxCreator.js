const NumRVsFieldContainerForSleepInRVCheckboxCreator = {
  Create() {
    const inputFieldContainer =
      document.createElement("div");
    inputFieldContainer.className =
      "field";
    inputFieldContainer.id = "num-RVs-field-for-sleep-in-RV-checkbox";
    const inputLabel = document.createElement("label");
    inputLabel.textContent = "Number of RVs:";
    inputLabel.htmlFor = "num-RVs-input-for-sleep-in-RV-checkbox";
    const input = document.createElement("input");
    input.name = "number-of-RVs";
    input.id = "num-RVs-input-for-sleep-in-RV-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(inputLabel);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
  },
};

export default NumRVsFieldContainerForSleepInRVCheckboxCreator;
