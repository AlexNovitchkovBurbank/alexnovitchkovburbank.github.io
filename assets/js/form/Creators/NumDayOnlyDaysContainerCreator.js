const NumDayOnlyDaysContainerCreator = {
  Create(idForInput, nameForInput) {
    const NumPeopleContainer =
      document.createElement("div");
    NumPeopleContainer.className =
      "field";
    NumPeopleContainer.id = "num-day-only-days-container";
    const NumPeopleLabel = document.createElement("label");
    NumPeopleLabel.textContent = "Number of days (No staying overnight):";
    NumPeopleLabel.htmlFor = idForInput;
    const NumPeopleInput = document.createElement("input");
    NumPeopleInput.type = "num-day-only-days";
    NumPeopleInput.name = nameForInput;
    NumPeopleInput.id = idForInput;
    NumPeopleInput.required = true;
    NumPeopleContainer.appendChild(NumPeopleLabel);
    NumPeopleContainer.appendChild(NumPeopleInput);

    return NumPeopleContainer;
  },
};

export default NumDayOnlyDaysContainerCreator;
