const CreateNumPeopleContainerCreator = {
  Create(idForInput, nameForInput) {
    const NumPeopleContainer =
      document.createElement("div");
    NumPeopleContainer.className =
      "form-field-container";
    NumPeopleContainer.id = "num-people-container";
    const NumPeopleLabel = document.createElement("label");
    NumPeopleLabel.textContent = "Number of people:";
    NumPeopleLabel.htmlFor = idForInput;
    const NumPeopleInput = document.createElement("input");
    NumPeopleInput.type = "num-people";
    NumPeopleInput.name = nameForInput;
    NumPeopleInput.id = idForInput;
    NumPeopleInput.required = true;
    NumPeopleContainer.appendChild(NumPeopleLabel);
    NumPeopleContainer.appendChild(NumPeopleInput);

    return NumPeopleContainer;
  },
};

export default CreateNumPeopleContainerCreator;
