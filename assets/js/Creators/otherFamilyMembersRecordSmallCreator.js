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