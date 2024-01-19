const StringToIntConverter = {
  Convert(numberAsString) {
    const numberAsNum = Number.parseInt(numberAsString);

    return numberAsNum;
  },
};

const otherFamilyMemberRecordsRemover = {
  Remove() {
    const formBodyElement = document.querySelector(".formBody");
    const recordsContainer = document.querySelector(".recordsContainer");

    if (recordsContainer != null) formBodyElement.removeChild(recordsContainer);
  },
};

const NumPeopleValidator = {
  Validate(numberOfPeopleString) {
    const numberOfPeopleNum = Number.parseInt(numberOfPeopleString);
    if (Number.isNaN(numberOfPeopleNum)) return false;
    if (!Number.isInteger(numberOfPeopleNum)) return false;

    return true;
  },
};

const RemoveOtherFamilyRecordsValidator = {
  Validate(numberOfPeopleInt) {
    const firstNameInputs = document.querySelectorAll(
      "[id^=Person][id$=FirstNameInput]"
    ); // Starts with Person and ends with FirstNameInput

    if (firstNameInputs.length != numberOfPeopleInt) return true;

    return false;
  },
};

const ContainerForNumPeopleRecordsCreator = {
  Create(numberOfPeople) {
    if (!Number.isInteger(numberOfPeople))
      throw new Error("number is not an integer");

    const recordsContainerElement = document.createElement("div");
    recordsContainerElement.className = "recordsContainer";

    for (let i = 1; i <= numberOfPeople; i++) {
      const recordDivElement = document.createElement("div");

      const firstNameLabelElement = document.createElement("label");
      firstNameLabelElement.textContent = `Member ${i.toLocaleString()}:`;
      firstNameLabelElement.className = "formLabel";
      firstNameLabelElement.id = `Person${i.toLocaleString()}FirstNameLabel`;

      const FirstNameInputElement = document.createElement("input");
      FirstNameInputElement.className = "formInput personRecordInputAndLabels";
      FirstNameInputElement.id = `Person${numberOfPeople.toLocaleString()}FirstNameInput`;

      recordDivElement.append(firstNameLabelElement);
      recordDivElement.append(FirstNameInputElement);

      recordsContainerElement.append(recordDivElement);
    }

    return recordsContainerElement;
  },
};

const DisplayNumberOfEntriesProcessor = {
  Process(numberOfPeopleString) {
    const numPeopleValidInt = NumPeopleValidator.Validate(numberOfPeopleString);

    if (!numPeopleValidInt)
      throw new Error("The number of people must be an number");

    const numberOfPeopleInt =
      StringToIntConverter.Convert(numberOfPeopleString);

    const shouldRemoveOtherMemberRecords =
      RemoveOtherFamilyRecordsValidator.Validate(numberOfPeopleInt);

    if (shouldRemoveOtherMemberRecords) {
      otherFamilyMemberRecordsRemover.Remove();

      const numPeopleRecordsContainer =
        ContainerForNumPeopleRecordsCreator.Create(numberOfPeopleInt);

      ContainerInFormBodyDisplayer.Display(numPeopleRecordsContainer);
    }
  },
};

const ContainerInFormBodyDisplayer = {
  Display(container) {
    const formBodyElement = document.querySelector(".formBody");
    formBodyElement.append(container);
  },
};

export default DisplayNumberOfEntriesProcessor;
