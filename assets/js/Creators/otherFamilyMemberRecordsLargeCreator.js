const ContainerForLargeScreenMemberRecordContainersCreator = {
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

      recordsContainerElementLargeScreenWidth.appendChild(
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
    FirstNameFieldElementLargeScreenWidth.appendChild(
      FirstNameLabelElementLargeScreenWidth
    );
    FirstNameFieldElementLargeScreenWidth.appendChild(
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
    AgeFieldElementLargeScreenWidth.appendChild(AgeLabelElementLargeScreenWidth);
    AgeFieldElementLargeScreenWidth.appendChild(AgeInputElementLargeScreenWidth);

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
    RelationshipFieldElementLargeScreenWidth.appendChild(
      RelationshipLabelElementLargeScreenWidth
    );
    RelationshipFieldElementLargeScreenWidth.appendChild(
      RelationshipInputElementLargeScreenWidth
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

    recordDivElementLargeScreenWidth.appendChild(isClergyContainer);
    recordDivElementLargeScreenWidth.appendChild(
      FirstNameFieldElementLargeScreenWidth
    );
    recordDivElementLargeScreenWidth.appendChild(AgeFieldElementLargeScreenWidth);
    recordDivElementLargeScreenWidth.appendChild(
      RelationshipFieldElementLargeScreenWidth
    );

    return recordDivElementLargeScreenWidth;
  };

  export default ContainerForLargeScreenMemberRecordContainersCreator;