const memberRecordsContainerCreator = {
  Create(numberOfPeople) {
    if (!Number.isInteger(numberOfPeople))
      throw new Error("number is not an integer");

    const recordsContainer =
      document.createElement("div");
    recordsContainer.className =
      "member-records-container";

    for (let i = 1; i <= numberOfPeople; i++) {
      const recordContainer =
      createMemberRecordContainer(i); // Can be renamed to createMemberRecordContainer

      recordsContainer.appendChild(
        recordContainer
      );
    }

    return recordsContainer;
  },
};

const createMemberRecordContainer =
  function createFlexMemberRecordContainer(i) {
    const recordContainer = document.createElement("div");
    recordContainer.className = "member-record-container";

    const firstNameFieldContainer = document.createElement("div");
    firstNameFieldContainer.className =
      "field-container";
    const firstNameLabel =
      document.createElement("label");
    firstNameLabel.textContent = `Family member ${i.toLocaleString()} first name:`;
    firstNameLabel.htmlFor = `Person${i.toLocaleString()}FirstNameInput`;
    const firstNameInput =
      document.createElement("input");
    firstNameInput.className =
      "form-input";
    firstNameInput.required = true;
    firstNameInput.ariaLabelContainer = `Member ${i.toLocaleString()} first name`;
    firstNameInput.id = `Person${i.toLocaleString()}FirstNameInput`;
    firstNameInput.name = `Member ${i.toLocaleString()}'s first name`;
    firstNameFieldContainer.appendChild(
      firstNameLabel
    );
    firstNameFieldContainer.appendChild(
      firstNameInput
    );

    const ageFieldContainer = document.createElement("div");
    ageFieldContainer.className =
      "field-container";
    const ageLabel = document.createElement("label");
    ageLabel.textContent = `Family member ${i.toLocaleString()} age:`;
    ageLabel.htmlFor = `Person${i.toLocaleString()}AgeInput`;
    const ageInput = document.createElement("input");
    ageInput.className = "form-input";
    ageInput.required = true;
    ageInput.ariaLabel = `Member ${i.toLocaleString()} age`;
    ageInput.id = `Person${i.toLocaleString()}AgeInput`;
    ageInput.name = `Member ${i.toLocaleString()}'s Age`;
    ageFieldContainer.appendChild(ageLabel);
    ageFieldContainer.appendChild(ageInput);

    const relationshipFieldContainer =
      document.createElement("div");
    relationshipFieldContainer.className =
      "field-container";
    const relationshipLabel =
      document.createElement("label");
      relationshipLabel.textContent = `Family member ${i.toLocaleString()} relationship:`;
      relationshipLabel.htmlFor = `Person${i.toLocaleString()}RelationshipInput`;
    const relationshipInput =
      document.createElement("input");
      relationshipInput.className =
      "form-input";
      relationshipInput.required = true;
      relationshipInput.ariaLabel = `Member ${i.toLocaleString()} relationship`;
      relationshipInput.id = `Person${i.toLocaleString()}RelationshipInput`;
      relationshipInput.name = `Member ${i.toLocaleString()}'s relationship`;
    relationshipFieldContainer.appendChild(
      relationshipLabel
    );
    relationshipFieldContainer.appendChild(
      relationshipInput
    );

    const isClergyFieldContainer = document.createElement("div");
    isClergyFieldContainer.id = "is-clergy-container";
      const isClergyLabelContainer = document.createElement("label");
      isClergyLabelContainer.textContent = "Clergy: ";
      const isClergyCheckboxContainer = document.createElement("input");
      isClergyCheckboxContainer.type = "checkbox";
      isClergyCheckboxContainer.id = "is-clergy-checkbox";
      isClergyFieldContainer.appendChild(isClergyLabelContainer);
      isClergyFieldContainer.appendChild(isClergyCheckboxContainer);

    const isVolunteerFieldContainer = document.createElement("div");
    isVolunteerFieldContainer.id = "is-volunteer-container";
      const isVolunteerLabelContainer = document.createElement("label");
      isVolunteerLabelContainer.textContent = "Volunteer: ";
      const isVolunteerCheckboxContainer = document.createElement("input");
      isVolunteerCheckboxContainer.type = "checkbox";
      isVolunteerCheckboxContainer.id = "is-volunteer-checkbox";
      isVolunteerFieldContainer.appendChild(isVolunteerLabelContainer);
      isVolunteerFieldContainer.appendChild(isVolunteerCheckboxContainer);

      const isStaffFieldContainer = document.createElement("div");
      isStaffFieldContainer.id = "is-staff-container";
      const isStaffLabelContainer = document.createElement("label");
      isStaffLabelContainer.textContent = "Staff: ";
      const isStaffCheckboxContainer = document.createElement("input");
      isStaffCheckboxContainer.type = "checkbox";
      isStaffCheckboxContainer.id = "is-staff-checkbox";
      isStaffFieldContainer.appendChild(isStaffLabelContainer);
      isStaffFieldContainer.appendChild(isStaffCheckboxContainer);

      const clergyVolunteerStaffFieldContainer = document.createElement("div");
      clergyVolunteerStaffFieldContainer.className = "family-member-attributes-checkboxes-container";
      clergyVolunteerStaffFieldContainer.appendChild(isClergyFieldContainer);
      clergyVolunteerStaffFieldContainer.appendChild(isVolunteerFieldContainer);
      clergyVolunteerStaffFieldContainer.appendChild(isStaffFieldContainer);

    recordContainer.appendChild(clergyVolunteerStaffFieldContainer);
    recordContainer.appendChild(
      firstNameFieldContainer
    );
    recordContainer.appendChild(ageFieldContainer);
    recordContainer.appendChild(
      relationshipFieldContainer
    );

    return recordContainer;
  };

  export default memberRecordsContainerCreator;