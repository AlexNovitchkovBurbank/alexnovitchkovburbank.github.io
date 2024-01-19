const StringToIntConverter = {
  Convert(numberAsString) {
    const numberAsNum = Number.parseInt(numberAsString);

    return numberAsNum;
  },
};

const otherFamilyMemberRecordsRemover = {
  Remove() {
    const formBodyElement = document.querySelector(".form-body");
    const recordsContainer = document.querySelector(".form-records-container");

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
    recordsContainerElement.className = "form-records-container";

    for (let i = 1; i <= numberOfPeople; i++) {
      const recordDivElement = document.createElement("div");
      recordDivElement.className = "form-field-flex-container";

      const memberLabelElement = document.createElement("label");
      memberLabelElement.textContent = `Member ${i.toLocaleString()}:`;

      const FirstNameInputElement = document.createElement("input");
      FirstNameInputElement.placeholder = "First name";
      FirstNameInputElement.className = "form-input";
      FirstNameInputElement.required = true;
      FirstNameInputElement.ariaLabel = `Member ${i.toLocaleString()} First name`;
      FirstNameInputElement.id = `Person${i.toLocaleString()}FirstNameInput`;
      FirstNameInputElement.name = `Member ${i.toLocaleString()}'s first name`;

      const AgeInputElement = document.createElement("input");
      AgeInputElement.placeholder = "Age";
      AgeInputElement.className = "form-input";
      AgeInputElement.required = true;
      AgeInputElement.ariaLabel = `Member ${i.toLocaleString()} Age`;
      AgeInputElement.id = `Person${i.toLocaleString()}AgeInput`;
      AgeInputElement.name = `Member ${i.toLocaleString()}'s Age`;

      const RelationshipInputElement = document.createElement("input");
      RelationshipInputElement.placeholder = "Relationship";
      RelationshipInputElement.className = "form-input";
      RelationshipInputElement.required = true;
      RelationshipInputElement.ariaLabel = `Member ${i.toLocaleString()} Relationship`;
      RelationshipInputElement.id = `Person${i.toLocaleString()}RelationshipInput`;
      RelationshipInputElement.name = `Member ${i.toLocaleString()}'s relationship`;

      recordDivElement.append(memberLabelElement);
      recordDivElement.append(FirstNameInputElement);
      recordDivElement.append(AgeInputElement);
      recordDivElement.append(RelationshipInputElement);

      // TODO: add clergy title checkbox and volunteer or staff checkbox

      recordsContainerElement.append(recordDivElement);
    }

    return recordsContainerElement;
  },
};

const DisplayNumberOfEntriesProcessor = {
  Process(numberOfPeopleString) {
    const numPeopleValidInt = NumPeopleValidator.Validate(numberOfPeopleString);

    if (!numPeopleValidInt) {
      otherFamilyMemberRecordsRemover.Remove();
      throw new Error("The number of people must be an number");
    }

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
    const formBodyElement = document.querySelector(".form-body");
    formBodyElement.append(container);
  },
};

export default DisplayNumberOfEntriesProcessor;
