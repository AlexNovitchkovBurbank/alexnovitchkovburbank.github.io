import mainNumPeopleFieldContainerCreator from "./mainNumPeopleFieldContainerCreator.js";

const familyInfoContainerCreator = {
  Create() {
    const familyInfoContainer = document.createElement("div");
    familyInfoContainer.className = "family-info-container";

    const familyNameFieldContainer =
      document.createElement("div");
      familyNameFieldContainer.className =
      "field-container";
    const familyNameLabel = document.createElement("label");
    familyNameLabel.textContent = "Family name:";
    familyNameLabel.htmlFor = "family-name-input";
    const familyNameInput = document.createElement("input");
    familyNameInput.name = "family-name";
    familyNameInput.id = "family-name-input";
    familyNameInput.required = true;
    familyNameFieldContainer.appendChild(familyNameLabel);
    familyNameFieldContainer.appendChild(familyNameInput);

    const firstNameFieldContainer =
      document.createElement("div");
      firstNameFieldContainer.className =
      "field-container";
    const firstNameLabel = document.createElement("label");
    firstNameLabel.textContent = "First name:";
    firstNameLabel.htmlFor = "first-name-input";
    const firstNameInput = document.createElement("input");
    firstNameInput.name = "first-name";
    firstNameInput.id = "first-name-input";
    firstNameInput.required = true;
    firstNameFieldContainer.appendChild(firstNameLabel);
    firstNameFieldContainer.appendChild(firstNameInput);

    const mobilePhoneNumberFieldContainer =
      document.createElement("div");
      mobilePhoneNumberFieldContainer.className =
      "field-container";
    const mobilePhoneNumberLabel = document.createElement("label");
    mobilePhoneNumberLabel.textContent = "Mobile phone number:";
    mobilePhoneNumberLabel.htmlFor = "mobile-phone-number-input";
    const mobilePhoneNumberInput = document.createElement("input");
    mobilePhoneNumberInput.name = "mobile-phone-number";
    mobilePhoneNumberInput.id = "mobile-phone-number-input";
    mobilePhoneNumberInput.required = true;
    mobilePhoneNumberFieldContainer.appendChild(mobilePhoneNumberLabel);
    mobilePhoneNumberFieldContainer.appendChild(mobilePhoneNumberInput);

    const emailFieldContainer = document.createElement("div");
    emailFieldContainer.className =
      "field-container";
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.htmlFor = "email-input";
    const emailInput = document.createElement("input");
    emailInput.name = "email";
    emailInput.id = "email-input";
    emailInput.required = true;
    emailFieldContainer.appendChild(emailLabel);
    emailFieldContainer.appendChild(emailInput);

    const churchNameFieldContainer =
      document.createElement("div");
      churchNameFieldContainer.className =
      "field-container";
    const churchNameLabel = document.createElement("label");
    churchNameLabel.textContent = "Church name:";
    churchNameLabel.htmlFor = "church-name-input";
    const churchNameInput = document.createElement("input");
    churchNameInput.name = "church-name";
    churchNameInput.id = "church-name-input";
    churchNameInput.required = true;
    churchNameFieldContainer.appendChild(churchNameLabel);
    churchNameFieldContainer.appendChild(churchNameInput);

    const churchCityFieldContainer =
      document.createElement("div");
      churchCityFieldContainer.className =
      "field-container";
    const churchCityLabel = document.createElement("label");
    churchCityLabel.textContent = "Church city:";
    churchCityLabel.htmlFor = "church-city-input";
    const churchCityInput = document.createElement("input");
    churchCityInput.name = "church-city";
    churchCityInput.id = "church-city-input";
    churchCityInput.required = true;
    churchCityFieldContainer.appendChild(churchCityLabel);
    churchCityFieldContainer.appendChild(churchCityInput);

    const numPeopleFieldContainer = mainNumPeopleFieldContainerCreator.Create();

    const requestStaffAndVolunteerInformationCheckboxContainer = document.createElement("div");
    const requestStaffAndVolunteerInformationLabel = document.createElement("label");
    requestStaffAndVolunteerInformationLabel.textContent = "Request staff and volunteer information:";
    requestStaffAndVolunteerInformationLabel.htmlFor = "requestStaffAndVolunteerInformationCheckboxInput";
    const requestStaffAndVolunteerInformationInput = document.createElement("input");
    requestStaffAndVolunteerInformationInput.name = "request-staff-and-volunteer-information";
    requestStaffAndVolunteerInformationInput.id = "requestStaffAndVolunteerInformationCheckboxInput";
    requestStaffAndVolunteerInformationInput.type = "checkbox";
    requestStaffAndVolunteerInformationInput.required = true;
    requestStaffAndVolunteerInformationCheckboxContainer.appendChild(requestStaffAndVolunteerInformationLabel);
    requestStaffAndVolunteerInformationCheckboxContainer.appendChild(requestStaffAndVolunteerInformationInput);

    const requestScholarshipFormCheckboxContainer = document.createElement("div");
    const requestScholarshipFormLabel = document.createElement("label");
    requestScholarshipFormLabel.textContent = "Request scholarship form:";
    requestScholarshipFormLabel.htmlFor = "requestScholarshipFormCheckboxInput";
    const requestScholarshipFormInput = document.createElement("input");
    requestScholarshipFormInput.name = "request-scholarship-form";
    requestScholarshipFormInput.id = "requestScholarshipFormCheckboxInput";
    requestScholarshipFormInput.type = "checkbox";
    requestScholarshipFormInput.required = true;
    requestScholarshipFormCheckboxContainer.appendChild(requestScholarshipFormLabel);
    requestScholarshipFormCheckboxContainer.appendChild(requestScholarshipFormInput);

    const requestClergyDiscountCheckboxContainer = document.createElement("div");
    const requestClergyDiscountCheckboxLabel = document.createElement("label");
    requestClergyDiscountCheckboxLabel.textContent = "Request clergy discount:";
    requestClergyDiscountCheckboxLabel.htmlFor = "requestClergyDiscountCheckboxInput";
    const requestClergyDiscountCheckboxInput = document.createElement("input");
    requestClergyDiscountCheckboxInput.name = "request-clergy-discount-form";
    requestClergyDiscountCheckboxInput.id = "requestClergyDiscountCheckboxInput";
    requestClergyDiscountCheckboxInput.type = "checkbox";
    requestClergyDiscountCheckboxInput.required = true;
    requestClergyDiscountCheckboxContainer.appendChild(requestClergyDiscountCheckboxLabel);
    requestClergyDiscountCheckboxContainer.appendChild(requestClergyDiscountCheckboxInput);

    const requestPaymentPlanInformationCheckboxContainer = document.createElement("div");
    const requestPaymentPlanInformationCheckboxLabel = document.createElement("label");
    requestPaymentPlanInformationCheckboxLabel.textContent = "Request payment plan information:";
    requestPaymentPlanInformationCheckboxLabel.htmlFor = "requestPaymentPlanInformationCheckboxInput";
    const requestPaymentPlanInformationCheckboxInput = document.createElement("input");
    requestPaymentPlanInformationCheckboxInput.name = "request-clergy-discount-form";
    requestPaymentPlanInformationCheckboxInput.id = "requestPaymentPlanInformationCheckboxInput";
    requestPaymentPlanInformationCheckboxInput.type = "checkbox";
    requestPaymentPlanInformationCheckboxInput.required = true;
    requestPaymentPlanInformationCheckboxContainer.appendChild(requestPaymentPlanInformationCheckboxLabel);
    requestPaymentPlanInformationCheckboxContainer.appendChild(requestPaymentPlanInformationCheckboxInput);

    const chaletCheckboxContainer = document.createElement("div");
    chaletCheckboxContainer.id = "chalet-checkbox-container";
    const chaletCheckboxFieldContainer = document.createElement("div");
    chaletCheckboxFieldContainer.id = "chalet-checkbox-field-container";
    const chaletCheckboxLabel = document.createElement("label");
    chaletCheckboxLabel.textContent = "We will stay in a chalet:";
    const chaletCheckbox = document.createElement("input");
    chaletCheckbox.type = "checkbox";
    chaletCheckbox.id = "chalet-checkbox";
    chaletCheckboxFieldContainer.appendChild(chaletCheckboxLabel);
    chaletCheckboxFieldContainer.appendChild(chaletCheckbox);
    chaletCheckboxContainer.appendChild(chaletCheckboxFieldContainer);

    const rvCheckboxContainer = document.createElement("div");
    rvCheckboxContainer.id = "rv-checkbox-container";
    const rvCheckboxFieldContainer = document.createElement("div");
    rvCheckboxFieldContainer.id = "rv-checkbox-field-container";
    const rvCheckboxLabel = document.createElement("label");
    rvCheckboxLabel.textContent = "We will stay in an rv:";
    const rvCheckbox = document.createElement("input");
    rvCheckbox.type = "checkbox";
    rvCheckbox.id = "rv-checkbox";
    rvCheckboxFieldContainer.appendChild(rvCheckboxLabel);
    rvCheckboxFieldContainer.appendChild(rvCheckbox);
    rvCheckboxContainer.appendChild(rvCheckboxFieldContainer);

    const tentCheckboxContainer = document.createElement("div");
    tentCheckboxContainer.id = "tent-checkbox-container";
    const tentCheckboxFieldContainer = document.createElement("div");
    tentCheckboxFieldContainer.id = "tent-checkbox-field-container";
    const tentCheckboxLabel = document.createElement("label");
    tentCheckboxLabel.textContent = "We will stay in tent(s):";
    const tentCheckbox = document.createElement("input");
    tentCheckbox.type = "checkbox";
    tentCheckbox.id = "tent-checkbox";
    tentCheckboxFieldContainer.appendChild(tentCheckboxLabel);
    tentCheckboxFieldContainer.appendChild(tentCheckbox);
    tentCheckboxContainer.appendChild(tentCheckboxFieldContainer);

    const sleepOnGroundCheckboxContainer = document.createElement("div");
    sleepOnGroundCheckboxContainer.id = "sleep-on-ground-checkbox-container";
    const sleepOnGroundCheckboxFieldContainer = document.createElement("div");
    sleepOnGroundCheckboxFieldContainer.id = "sleep-on-ground-checkbox-field-container";
    const sleepOnGroundCheckboxLabel = document.createElement("label");
    sleepOnGroundCheckboxLabel.textContent = "We will sleep on the ground:";
    const sleepOnGroundCheckbox = document.createElement("input");
    sleepOnGroundCheckbox.type = "checkbox";
    sleepOnGroundCheckbox.id = "sleep-on-ground-checkbox";
    sleepOnGroundCheckboxFieldContainer.appendChild(sleepOnGroundCheckboxLabel);
    sleepOnGroundCheckboxFieldContainer.appendChild(sleepOnGroundCheckbox);
    sleepOnGroundCheckboxContainer.appendChild(sleepOnGroundCheckboxFieldContainer);

    const stayOvernightCheckboxContainer = document.createElement("div");
    stayOvernightCheckboxContainer.id = "overnight-checkbox-container";
    const stayOvernightCheckboxFieldContainer = document.createElement("div");
    stayOvernightCheckboxFieldContainer.id = "overnight-checkbox-field-container";
    const stayOvernightCheckboxLabel = document.createElement("label");
    stayOvernightCheckboxLabel.textContent = "We will stay overnight:";
    const stayOvernightCheckbox = document.createElement("input");
    stayOvernightCheckbox.type = "checkbox";
    stayOvernightCheckbox.id = "overnight-checkbox";
    stayOvernightCheckboxFieldContainer.appendChild(stayOvernightCheckboxLabel);
    stayOvernightCheckboxFieldContainer.appendChild(stayOvernightCheckbox);
    stayOvernightCheckboxContainer.appendChild(stayOvernightCheckboxFieldContainer);

    const dayUseOnlyCheckboxContainer = document.createElement("div");
    dayUseOnlyCheckboxContainer.id = "day-use-only-checkbox-container";
    const dayUseOnlyCheckboxFieldContainer = document.createElement("div");
    dayUseOnlyCheckboxFieldContainer.id = "day-use-only-checkbox-field-container";
    const dayUseOnlyCheckboxLabel = document.createElement("label");
    dayUseOnlyCheckboxLabel.textContent = "Day use only:";
    const dayUseOnlyCheckbox = document.createElement("input");
    dayUseOnlyCheckbox.type = "checkbox";
    dayUseOnlyCheckbox.id = "day-use-only-checkbox";
    dayUseOnlyCheckboxFieldContainer.appendChild(dayUseOnlyCheckboxLabel);
    dayUseOnlyCheckboxFieldContainer.appendChild(dayUseOnlyCheckbox);
    dayUseOnlyCheckboxContainer.appendChild(dayUseOnlyCheckboxFieldContainer);

    const days = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
    const meals = ["Breakfast", "Lunch", "Dinner"];

    const firstMealContainer = document.createElement("div");
    firstMealContainer.id = "first-meal-container";
    const firstMealContainerText = document.createElement("p");
    firstMealContainerText.textContent = "First meal";
    firstMealContainerText.id = "first-meal-container-text";
    const firstMealContainerWithFields = document.createElement("div");
    firstMealContainerWithFields.id = "first-meal-container-with-fields";
    const firstMealDayFieldContainer = document.createElement("div");
    firstMealDayFieldContainer.id = "first-meal-day-field-container";
    const firstMealDayLabel = document.createElement("label");
    firstMealDayLabel.textContent = "day";
    firstMealDayLabel.htmlFor = "first-meal-day-selector";
    const firstMealDaySelector = document.createElement("select");
    firstMealDaySelector.required = true;
    firstMealDaySelector.name = "day-of-first-meal";
    firstMealDaySelector.className = "selector";
    firstMealDaySelector.id = "first-meal-day-selector";
    for (let i = 0; i < 7; i++) {
      const dayOption = document.createElement("option");
      dayOption.text = days[i];
      firstMealDaySelector.add(dayOption);
    }
    firstMealDayFieldContainer.appendChild(firstMealDayLabel);
    firstMealDayFieldContainer.appendChild(firstMealDaySelector);
    const firstMealMealFieldContainer = document.createElement("div");
    firstMealMealFieldContainer.id = "first-meal-meal-field-container";
    const firstMealMealLabel = document.createElement("label");
    firstMealMealLabel.textContent = "meal";
    firstMealMealLabel.htmlFor = "first-meal-meal-selector";
    const firstMealMealSelector = document.createElement("select");
    firstMealMealSelector.required = true;
    firstMealMealSelector.name = "first-meal";
    firstMealMealSelector.className = "selector";
    firstMealMealSelector.id = "first-meal-meal-selector";
    for (let i = 0; i < 3; i++) {
      const dayOption = document.createElement("option");
      dayOption.text = meals[i];
      firstMealMealSelector.add(dayOption);
    }
    firstMealMealFieldContainer.appendChild(firstMealMealLabel);
    firstMealMealFieldContainer.appendChild(firstMealMealSelector);
    firstMealContainerWithFields.appendChild(firstMealDayFieldContainer);
    firstMealContainerWithFields.appendChild(firstMealMealFieldContainer);
    firstMealContainer.appendChild(firstMealContainerText);
    firstMealContainer.appendChild(firstMealContainerWithFields);

    const lastMealContainer = document.createElement("div");
    lastMealContainer.id = "last-meal-container";
    const lastMealContainerText = document.createElement("p");
    lastMealContainerText.id = "last-meal-container-text";
    lastMealContainerText.textContent = "Last meal";
    const lastMealContainerWithFields = document.createElement("div");
    lastMealContainerWithFields.id = "last-meal-container-with-fields";
    const lastMealDayFieldContainer = document.createElement("div");
    lastMealDayFieldContainer.id = "last-meal-day-field-container";
    const lastMealDayLabel = document.createElement("label");
    lastMealDayLabel.textContent = "day";
    lastMealDayLabel.htmlFor = "last-meal-day-selector";
    const lastMealDaySelector = document.createElement("select");
    lastMealDaySelector.required = true;
    lastMealDaySelector.name = "day-of-last-meal";
    lastMealDaySelector.className = "selector";
    lastMealDaySelector.id = "last-meal-day-selector";
    for (let i = 0; i < 7; i++) {
      const dayOption = document.createElement("option");
      dayOption.text = days[i];
      lastMealDaySelector.add(dayOption);
    }
    lastMealDayFieldContainer.appendChild(lastMealDayLabel);
    lastMealDayFieldContainer.appendChild(lastMealDaySelector);
    const lastMealMealFieldContainer = document.createElement("div");
    lastMealMealFieldContainer.id = "last-meal-meal-field-container";
    const lastMealMealLabel = document.createElement("label");
    lastMealMealLabel.textContent = "meal";
    lastMealDayLabel.htmlFor = "last-meal-meal-selector";
    const lastMealMealSelector = document.createElement("select");
    lastMealMealSelector.required = true;
    lastMealMealSelector.name = "last-meal";
    lastMealMealSelector.className = "selector";
    lastMealMealSelector.id = "last-meal-meal-selector";
    for (let i = 0; i < 3; i++) {
      const dayOption = document.createElement("option");
      dayOption.text = meals[i];
      lastMealMealSelector.add(dayOption);
    }
    lastMealMealFieldContainer.appendChild(lastMealMealLabel);
    lastMealMealFieldContainer.appendChild(lastMealMealSelector);
    lastMealContainerWithFields.appendChild(lastMealDayFieldContainer);
    lastMealContainerWithFields.appendChild(lastMealMealFieldContainer);
    lastMealContainer.appendChild(lastMealContainerText);
    lastMealContainer.appendChild(lastMealContainerWithFields);

    familyInfoContainer.appendChild(familyNameFieldContainer);
    familyInfoContainer.appendChild(firstNameFieldContainer);
    familyInfoContainer.appendChild(mobilePhoneNumberFieldContainer);
    familyInfoContainer.appendChild(emailFieldContainer);
    familyInfoContainer.appendChild(churchNameFieldContainer);
    familyInfoContainer.appendChild(churchCityFieldContainer);
    familyInfoContainer.appendChild(numPeopleFieldContainer);
    familyInfoContainer.appendChild(requestStaffAndVolunteerInformationCheckboxContainer);
    familyInfoContainer.appendChild(requestScholarshipFormCheckboxContainer);
    familyInfoContainer.appendChild(requestClergyDiscountCheckboxContainer);
    familyInfoContainer.appendChild(requestPaymentPlanInformationCheckboxContainer);
    familyInfoContainer.appendChild(chaletCheckboxContainer);
    familyInfoContainer.appendChild(rvCheckboxContainer);
    familyInfoContainer.appendChild(tentCheckboxContainer);
    familyInfoContainer.appendChild(sleepOnGroundCheckboxContainer);
    familyInfoContainer.appendChild(stayOvernightCheckboxContainer);
    familyInfoContainer.appendChild(dayUseOnlyCheckboxContainer);
    familyInfoContainer.appendChild(firstMealContainer);
    familyInfoContainer.appendChild(lastMealContainer);

    return familyInfoContainer;
  },
};

export default familyInfoContainerCreator;
