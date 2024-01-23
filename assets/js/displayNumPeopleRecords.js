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

const FamilyInfoContainerCreator = {
  Create() {
    const familyInfoContainer = document.createElement("div");
    familyInfoContainer.className = "family-info";

    const formFieldFlexFamilyNameContainerElement =
      document.createElement("div");
    formFieldFlexFamilyNameContainerElement.className =
      "form-field-flex-container-large-screen-width";
    const familyNameLabel = document.createElement("label");
    familyNameLabel.textContent = "Family name:";
    familyNameLabel.htmlFor = "family-name";
    const familyNameInput = document.createElement("input");
    familyNameInput.type = "text";
    familyNameInput.name = "family-name";
    familyNameInput.id = "family-name";
    familyNameInput.required = true;
    formFieldFlexFamilyNameContainerElement.appendChild(familyNameLabel);
    formFieldFlexFamilyNameContainerElement.appendChild(familyNameInput);

    const formFieldFlexEmailContainerElement = document.createElement("div");
    formFieldFlexEmailContainerElement.className =
      "form-field-flex-container-large-screen-width";
    const EmailLabel = document.createElement("label");
    EmailLabel.textContent = "Email:";
    EmailLabel.htmlFor = "email";
    const EmailInput = document.createElement("input");
    EmailInput.type = "email";
    EmailInput.name = "email";
    EmailInput.id = "email";
    EmailInput.required = true;
    formFieldFlexEmailContainerElement.appendChild(EmailLabel);
    formFieldFlexEmailContainerElement.appendChild(EmailInput);

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

    const stayInChaletContainer = document.createElement("div");
    const stayInChaletCheckboxLabel = document.createElement("label");
    stayInChaletCheckboxLabel.textContent = "We will stay in chalet:";
    const stayInChaletCheckbox = document.createElement("input");
    stayInChaletCheckbox.type = "checkbox";
    stayInChaletContainer.append(stayInChaletCheckboxLabel);
    stayInChaletContainer.append(stayInChaletCheckbox);

    const stayInRvContainer = document.createElement("div");
    const stayInRvCheckboxLabel = document.createElement("label");
    stayInRvCheckboxLabel.textContent = "We will stay in an RV:";
    const stayInRvCheckbox = document.createElement("input");
    stayInRvCheckbox.type = "checkbox";
    stayInRvContainer.append(stayInRvCheckboxLabel);
    stayInRvContainer.append(stayInRvCheckbox);

    const stayInTentsContainer = document.createElement("div");
    const stayInTentsCheckboxLabel = document.createElement("label");
    stayInTentsCheckboxLabel.textContent = "We will stay in tent(s):";
    const stayInTentsCheckbox = document.createElement("input");
    stayInTentsCheckbox.type = "checkbox";
    stayInTentsContainer.append(stayInTentsCheckboxLabel);
    stayInTentsContainer.append(stayInTentsCheckbox);

    const sleepOnGroundContainer = document.createElement("div");
    const sleepOnGroundCheckboxLabel = document.createElement("label");
    sleepOnGroundCheckboxLabel.textContent = "We will sleep on the ground:";
    const sleepOnGroundCheckbox = document.createElement("input");
    sleepOnGroundCheckbox.type = "checkbox";
    sleepOnGroundContainer.append(sleepOnGroundCheckboxLabel);
    sleepOnGroundContainer.append(sleepOnGroundCheckbox);
    
    familyInfoContainer.append(formFieldFlexFamilyNameContainerElement);
    familyInfoContainer.append(formFieldFlexEmailContainerElement);
    familyInfoContainer.append(formFieldFlexNumPeopleContainerElement);
    familyInfoContainer.append(stayInChaletContainer);
    familyInfoContainer.append(stayInRvContainer);
    familyInfoContainer.append(stayInTentsContainer);
    familyInfoContainer.append(sleepOnGroundContainer);

    return familyInfoContainer;
  },
};

const ContainerForNumPeopleRecordsCreator = {
  Create(numberOfPeople) {
    if (!Number.isInteger(numberOfPeople))
      throw new Error("number is not an integer");

    const recordsContainerElementLargeScreenWidth =
      document.createElement("div");
    recordsContainerElementLargeScreenWidth.className =
      "form-records-container";

    for (let i = 1; i <= numberOfPeople; i++) {
      const recordDivElementLargeScreenWidth =
        createLargeScreenMemberRecordContainer(i); // Can be renamed to createMemberRecordContainer

      recordsContainerElementLargeScreenWidth.append(
        recordDivElementLargeScreenWidth
      );
    }

    return recordsContainerElementLargeScreenWidth;
  },
};

const createLargeScreenMemberRecordContainer =
  function createLargeWidthScreenMemberRecordContainer(i) {
    const recordDivElementLargeScreenWidth = document.createElement("div");
    recordDivElementLargeScreenWidth.className = "record-large-screen-width";

    const FirstNameFieldElementLargeScreenWidth = document.createElement("div");
    FirstNameFieldElementLargeScreenWidth.className =
      "form-field-flex-container-large-screen-width";
    const FirstNameLabelElementLargeScreenWidth =
      document.createElement("label");
    FirstNameLabelElementLargeScreenWidth.textContent = `Family member ${i.toLocaleString()} first name:`;
    FirstNameLabelElementLargeScreenWidth.htmlFor = `Person${i.toLocaleString()}FirstNameInput`;
    const FirstNameInputElementLargeScreenWidth =
      document.createElement("input");
    FirstNameInputElementLargeScreenWidth.className =
      "form-input-large-screen-width";
    FirstNameInputElementLargeScreenWidth.required = true;
    FirstNameInputElementLargeScreenWidth.ariaLabel = `Member ${i.toLocaleString()} First name`;
    FirstNameInputElementLargeScreenWidth.id = `Person${i.toLocaleString()}FirstNameInput`;
    FirstNameInputElementLargeScreenWidth.name = `Member ${i.toLocaleString()}'s first name`;
    FirstNameFieldElementLargeScreenWidth.append(
      FirstNameLabelElementLargeScreenWidth
    );
    FirstNameFieldElementLargeScreenWidth.append(
      FirstNameInputElementLargeScreenWidth
    );

    const AgeFieldElementLargeScreenWidth = document.createElement("div");
    AgeFieldElementLargeScreenWidth.className =
      "form-field-flex-container-large-screen-width";
    const AgeLabelElementLargeScreenWidth = document.createElement("label");
    AgeLabelElementLargeScreenWidth.textContent = `Family member ${i.toLocaleString()} age:`;
    AgeLabelElementLargeScreenWidth.htmlFor = `Person${i.toLocaleString()}AgeInput`;
    const AgeInputElementLargeScreenWidth = document.createElement("input");
    AgeInputElementLargeScreenWidth.className = "form-input-large-screen-width";
    AgeInputElementLargeScreenWidth.required = true;
    AgeInputElementLargeScreenWidth.ariaLabel = `Member ${i.toLocaleString()} Age`;
    AgeInputElementLargeScreenWidth.id = `Person${i.toLocaleString()}AgeInput`;
    AgeInputElementLargeScreenWidth.name = `Member ${i.toLocaleString()}'s Age`;
    AgeFieldElementLargeScreenWidth.append(AgeLabelElementLargeScreenWidth);
    AgeFieldElementLargeScreenWidth.append(AgeInputElementLargeScreenWidth);

    const RelationshipFieldElementLargeScreenWidth =
      document.createElement("div");
    RelationshipFieldElementLargeScreenWidth.className =
      "form-field-flex-container-large-screen-width";
    const RelationshipLabelElementLargeScreenWidth =
      document.createElement("label");
    RelationshipLabelElementLargeScreenWidth.textContent = `Family member ${i.toLocaleString()} relationship:`;
    RelationshipLabelElementLargeScreenWidth.htmlFor = `Person${i.toLocaleString()}RelationshipInput`;
    const RelationshipInputElementLargeScreenWidth =
      document.createElement("input");
    RelationshipInputElementLargeScreenWidth.className =
      "form-input-large-screen-width";
    RelationshipInputElementLargeScreenWidth.required = true;
    RelationshipInputElementLargeScreenWidth.ariaLabel = `Member ${i.toLocaleString()} Relationship`;
    RelationshipInputElementLargeScreenWidth.id = `Person${i.toLocaleString()}RelationshipInput`;
    RelationshipInputElementLargeScreenWidth.name = `Member ${i.toLocaleString()}'s relationship`;
    RelationshipFieldElementLargeScreenWidth.append(
      RelationshipLabelElementLargeScreenWidth
    );
    RelationshipFieldElementLargeScreenWidth.append(
      RelationshipInputElementLargeScreenWidth
    );

    // TODO: add clergy title checkbox and volunteer or staff checkbox

    recordDivElementLargeScreenWidth.append(
      FirstNameFieldElementLargeScreenWidth
    );
    recordDivElementLargeScreenWidth.append(AgeFieldElementLargeScreenWidth);
    recordDivElementLargeScreenWidth.append(
      RelationshipFieldElementLargeScreenWidth
    );

    return recordDivElementLargeScreenWidth;
  };

const createSmallScreenMemberRecordContainer =
  function createSmallWidthScreenMemberRecordContainer(i) {
    const recordDivElementSmallScreenWidth = document.createElement("div");

    const FirstNameInputElementSmallScreenWidth =
      document.createElement("input");
    FirstNameInputElementSmallScreenWidth.className =
      "form-input-small-screen-width";
    FirstNameInputElementSmallScreenWidth.placeholder = `Family member ${i.toLocaleString()} first name:`;
    FirstNameInputElementSmallScreenWidth.required = true;
    FirstNameInputElementSmallScreenWidth.ariaLabel = `Member ${i.toLocaleString()} First name`;
    FirstNameInputElementSmallScreenWidth.id = `Person${i.toLocaleString()}FirstNameInput`;
    FirstNameInputElementSmallScreenWidth.name = `Member ${i.toLocaleString()}'s first name`;

    const AgeInputElementSmallScreenWidth = document.createElement("input");
    AgeInputElementSmallScreenWidth.placeholder = `Family member ${i.toLocaleString()} age:`;
    AgeInputElementSmallScreenWidth.className = "form-input-small-screen-width";
    AgeInputElementSmallScreenWidth.required = true;
    AgeInputElementSmallScreenWidth.ariaLabel = `Member ${i.toLocaleString()} Age`;
    AgeInputElementSmallScreenWidth.id = `Person${i.toLocaleString()}AgeInput`;
    AgeInputElementSmallScreenWidth.name = `Member ${i.toLocaleString()}'s Age`;

    const RelationshipInputElementSmallScreenWidth =
      document.createElement("input");
    RelationshipInputElementSmallScreenWidth.placeholder = `Family member ${i.toLocaleString()} relationship:`;
    RelationshipInputElementSmallScreenWidth.className =
      "form-input-small-screen-width";
    RelationshipInputElementSmallScreenWidth.required = true;
    RelationshipInputElementSmallScreenWidth.ariaLabel = `Member ${i.toLocaleString()} Relationship`;
    RelationshipInputElementSmallScreenWidth.id = `Person${i.toLocaleString()}RelationshipInput`;
    RelationshipInputElementSmallScreenWidth.name = `Member ${i.toLocaleString()}'s relationship`;

    // TODO: add clergy title checkbox and volunteer or staff checkbox

    recordDivElementSmallScreenWidth.append(
      FirstNameInputElementSmallScreenWidth
    );

    recordDivElementSmallScreenWidth.append(AgeInputElementSmallScreenWidth);

    recordDivElementSmallScreenWidth.append(
      RelationshipInputElementSmallScreenWidth
    );

    return recordDivElementSmallScreenWidth;
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

const DisplayFamilyInfoProcessor = {
  Process() {
    const familyInfoContainer = FamilyInfoContainerCreator.Create();

    ContainerInFormBodyDisplayer.Display(familyInfoContainer);
  },
};

export { DisplayNumberOfEntriesProcessor, DisplayFamilyInfoProcessor };
