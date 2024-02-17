const ContainerForMemberRecordContainersCreator = {
  Create(numberOfPeople) {
    if (!Number.isInteger(numberOfPeople))
      throw new Error("number is not an integer");

    const recordsContainerElement =
      document.createElement("div");
    recordsContainerElement.className =
      "form-family-member-records-container";

    for (let i = 1; i <= numberOfPeople; i++) {
      const recordDivElement =
        createMemberRecordContainer(i); // Can be renamed to createMemberRecordContainer

      recordsContainerElement.appendChild(
        recordDivElement
      );
    }

    return recordsContainerElement;
  },
};

const createMemberRecordContainer =
  function createMemberRecordContainer(i) {
    const recordDivElement = document.createElement("div");
    recordDivElement.className = "family-member-record-container";

    const FirstNameFieldElement = document.createElement("div");
    FirstNameFieldElement.className =
      "form-field-container";
    const FirstNameLabelElement =
      document.createElement("label");
    FirstNameLabelElement.textContent = `Family member ${i.toLocaleString()} first name:`;
    FirstNameLabelElement.htmlFor = `Person${i.toLocaleString()}FirstNameInput`;
    const FirstNameInputElement =
      document.createElement("input");
    FirstNameInputElement.className =
      "form-input---width";
    FirstNameInputElement.required = true;
    FirstNameInputElement.ariaLabel = `Member ${i.toLocaleString()} First name`;
    FirstNameInputElement.id = `Person${i.toLocaleString()}FirstNameInput`;
    FirstNameInputElement.name = `Member ${i.toLocaleString()}'s first name`;
    FirstNameFieldElement.appendChild(
      FirstNameLabelElement
    );
    FirstNameFieldElement.appendChild(
      FirstNameInputElement
    );

    const AgeFieldElement = document.createElement("div");
    AgeFieldElement.className =
      "form-field-container";
    const AgeLabelElement = document.createElement("label");
    AgeLabelElement.textContent = `Family member ${i.toLocaleString()} age:`;
    AgeLabelElement.htmlFor = `Person${i.toLocaleString()}AgeInput`;
    const AgeInputElement = document.createElement("input");
    AgeInputElement.className = "form-input---width";
    AgeInputElement.required = true;
    AgeInputElement.ariaLabel = `Member ${i.toLocaleString()} Age`;
    AgeInputElement.id = `Person${i.toLocaleString()}AgeInput`;
    AgeInputElement.name = `Member ${i.toLocaleString()}'s Age`;
    AgeFieldElement.appendChild(AgeLabelElement);
    AgeFieldElement.appendChild(AgeInputElement);

    const RelationshipFieldElement =
      document.createElement("div");
    RelationshipFieldElement.className =
      "form-field-container";
    const RelationshipLabelElement =
      document.createElement("label");
    RelationshipLabelElement.textContent = `Family member ${i.toLocaleString()} relationship:`;
    RelationshipLabelElement.htmlFor = `Person${i.toLocaleString()}RelationshipInput`;
    const RelationshipInputElement =
      document.createElement("input");
    RelationshipInputElement.className =
      "form-input---width";
    RelationshipInputElement.required = true;
    RelationshipInputElement.ariaLabel = `Member ${i.toLocaleString()} Relationship`;
    RelationshipInputElement.id = `Person${i.toLocaleString()}RelationshipInput`;
    RelationshipInputElement.name = `Member ${i.toLocaleString()}'s relationship`;
    RelationshipFieldElement.appendChild(
      RelationshipLabelElement
    );
    RelationshipFieldElement.appendChild(
      RelationshipInputElement
    );

    const isClergyContainer = document.createElement("div");
    isClergyContainer.id = "is-clergy-container";
      const isClergyLabel = document.createElement("label");
      isClergyLabel.textContent = "Clergy: ";
      const isClergyCheckbox = document.createElement("input");
      isClergyCheckbox.type = "checkbox";
      isClergyCheckbox.id = "is-clergy-checkbox";
      isClergyContainer.appendChild(isClergyLabel);
      isClergyContainer.appendChild(isClergyCheckbox);

    const isVolunteerContainer = document.createElement("div");
    isVolunteerContainer.id = "is-volunteer-container";
      const isVolunteerLabel = document.createElement("label");
      isVolunteerLabel.textContent = "Volunteer: ";
      const isVolunteerCheckbox = document.createElement("input");
      isVolunteerCheckbox.type = "checkbox";
      isVolunteerCheckbox.id = "is-volunteer-checkbox";
      isVolunteerContainer.appendChild(isVolunteerLabel);
      isVolunteerContainer.appendChild(isVolunteerCheckbox);

      const isStaffContainer = document.createElement("div");
      isStaffContainer.id = "is-staff-container";
      const isStaffLabel = document.createElement("label");
      isStaffLabel.textContent = "Staff: ";
      const isStaffCheckbox = document.createElement("input");
      isStaffCheckbox.type = "checkbox";
      isStaffCheckbox.id = "is-staff-checkbox";
      isStaffContainer.appendChild(isStaffLabel);
      isStaffContainer.appendChild(isStaffCheckbox);

      const clergyVolunteerStaffContainer = document.createElement("div");
      clergyVolunteerStaffContainer.className = "family-member-attributes-checkboxes-container";
      clergyVolunteerStaffContainer.appendChild(isClergyContainer);
      clergyVolunteerStaffContainer.appendChild(isVolunteerContainer);
      clergyVolunteerStaffContainer.appendChild(isStaffContainer);

    recordDivElement.appendChild(clergyVolunteerStaffContainer);
    recordDivElement.appendChild(
      FirstNameFieldElement
    );
    recordDivElement.appendChild(AgeFieldElement);
    recordDivElement.appendChild(
      RelationshipFieldElement
    );

    return recordDivElement;
  };

  export default ContainerForMemberRecordContainersCreator;