const NumDaysFieldContainerForDayUseOnlyCheckboxCreator = {
    Create() {
      const inputFieldContainer =
        document.createElement("div");
      inputFieldContainer.className =
        "field";
      inputFieldContainer.id = "num-days-field-for-day-use-only-checkbox";
      const inputLabel = document.createElement("label");
      inputLabel.textContent = "Number of days:";
      inputLabel.htmlFor = "num-days-input-for-day-use-only-checkbox";
      const input = document.createElement("input");
      input.name = "number-of-days-for-day-use-only";
      input.id = "num-days-input-for-day-use-only-checkbox";
      input.required = true;
      inputFieldContainer.appendChild(inputLabel);
      inputFieldContainer.appendChild(input);

      return inputFieldContainer;
    },
  };
  
  export default NumDaysFieldContainerForDayUseOnlyCheckboxCreator;