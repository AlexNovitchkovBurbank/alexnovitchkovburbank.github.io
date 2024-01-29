const CreateNumPeopleContainerLargeCreator = {
  Create() {
    const formFieldFlexNumPeopleContainerElement =
      document.createElement("div");
    formFieldFlexNumPeopleContainerElement.className =
      "form-field-flex-container-large-screen-width";
    const NumPeopleLabel = document.createElement("label");
    NumPeopleLabel.textContent = "Number of people:";
    NumPeopleLabel.htmlFor = "num-people";
    const NumPeopleInput = document.createElement("input");
    NumPeopleInput.type = "num-people";
    NumPeopleInput.name = "number-of-people";
    NumPeopleInput.id = "num-people";
    NumPeopleInput.required = true;
    formFieldFlexNumPeopleContainerElement.appendChild(NumPeopleLabel);
    formFieldFlexNumPeopleContainerElement.appendChild(NumPeopleInput);

    return formFieldFlexNumPeopleContainerElement;
  },
};

export default CreateNumPeopleContainerLargeCreator;
