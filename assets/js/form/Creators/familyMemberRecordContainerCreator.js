const ContainerForMemberRecordContainersCreator = {
  Create(numberOfPeople) {
    if (!Number.isInteger(numberOfPeople))
      throw new Error("number is not an integer");

    const recordsContainer =
      document.createElement("div");
    recordsContainer.className =
      "form-family-member-records-container";

    for (let i = 1; i <= numberOfPeople; i++) {
      const recordDivContainer =
        createMemberRecordContainer(i); // Can be renamed to createMemberRecordContainer

      recordsContainer.appendChild(
        recordDivContainer
      );
    }

    return recordsContainer;
  },
};

const createMemberRecordContainer =
  function createMemberRecordContainer(i) {
    const recordDivContainer = document.createElement("div");
    recordDivContainer.className = "family-member-record-container";

    const FirstNameFieldContainer = document.createElement("div");
    FirstNameFieldContainer.className =
      "field";
    const FirstNameLabelContainer =
      document.createElement("label");
    FirstNameLabelContainer.textContent = `Family member ${i.toLocaleString()} first name:`;
    FirstNameLabelContainer.htmlFor = `Person${i.toLocaleString()}FirstNameInput`;
    const FirstNameInputContainer =
      document.createElement("input");
    FirstNameInputContainer.className =
      "form-input";
    FirstNameInputContainer.required = true;
    FirstNameInputContainer.ariaLabel = `Member ${i.toLocaleString()} First name`;
    FirstNameInputContainer.id = `Person${i.toLocaleString()}FirstNameInput`;
    FirstNameInputContainer.name = `Member ${i.toLocaleString()}'s first name`;
    FirstNameFieldContainer.appendChild(
      FirstNameLabelContainer
    );
    FirstNameFieldContainer.appendChild(
      FirstNameInputContainer
    );

    const AgeFieldContainer = document.createElement("div");
    AgeFieldContainer.className =
      "field";
    const AgeLabelContainer = document.createElement("label");
    AgeLabelContainer.textContent = `Family member ${i.toLocaleString()} age:`;
    AgeLabelContainer.htmlFor = `Person${i.toLocaleString()}AgeInput`;
    const AgeInputContainer = document.createElement("input");
    AgeInputContainer.className = "form-input";
    AgeInputContainer.required = true;
    AgeInputContainer.ariaLabel = `Member ${i.toLocaleString()} Age`;
    AgeInputContainer.id = `Person${i.toLocaleString()}AgeInput`;
    AgeInputContainer.name = `Member ${i.toLocaleString()}'s Age`;
    AgeFieldContainer.appendChild(AgeLabelContainer);
    AgeFieldContainer.appendChild(AgeInputContainer);

    const RelationshipFieldContainer =
      document.createElement("div");
    RelationshipFieldContainer.className =
      "field";
    const RelationshipLabelContainer =
      document.createElement("label");
    RelationshipLabelContainer.textContent = `Family member ${i.toLocaleString()} relationship:`;
    RelationshipLabelContainer.htmlFor = `Person${i.toLocaleString()}RelationshipInput`;
    const RelationshipInputContainer =
      document.createElement("input");
    RelationshipInputContainer.className =
      "form-input";
    RelationshipInputContainer.required = true;
    RelationshipInputContainer.ariaLabel = `Member ${i.toLocaleString()} Relationship`;
    RelationshipInputContainer.id = `Person${i.toLocaleString()}RelationshipInput`;
    RelationshipInputContainer.name = `Member ${i.toLocaleString()}'s relationship`;
    RelationshipFieldContainer.appendChild(
      RelationshipLabelContainer
    );
    RelationshipFieldContainer.appendChild(
      RelationshipInputContainer
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

    recordDivContainer.appendChild(clergyVolunteerStaffContainer);
    recordDivContainer.appendChild(
      FirstNameFieldContainer
    );
    recordDivContainer.appendChild(AgeFieldContainer);
    recordDivContainer.appendChild(
      RelationshipFieldContainer
    );

    return recordDivContainer;
  };

  export default ContainerForMemberRecordContainersCreator;