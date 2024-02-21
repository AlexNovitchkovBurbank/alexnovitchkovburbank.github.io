const NumNightsContainerCreator = {
  Create(idForInput, nameForInput) {
    const NumPeopleContainer =
      document.createElement("div");
    NumPeopleContainer.className =
      "form-field-container";
    NumPeopleContainer.id = "num-nights-container";
    const NumPeopleLabel = document.createElement("label");
    NumPeopleLabel.textContent = "Number of nights:";
    NumPeopleLabel.htmlFor = idForInput;
    const NumPeopleInput = document.createElement("input");
    NumPeopleInput.type = "num-nights";
    NumPeopleInput.name = nameForInput;
    NumPeopleInput.id = idForInput;
    NumPeopleInput.required = true;
    NumPeopleContainer.appendChild(NumPeopleLabel);
    NumPeopleContainer.appendChild(NumPeopleInput);

    return NumPeopleContainer;
  },
};

export default NumNightsContainerCreator;
