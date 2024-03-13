import NumPeopleFieldContainerCreator from "./NumPeopleFieldContainerCreator.js";

const FamilyInfoContainerCreator = {
  Create() {
    const familyInfoContainer = document.createElement("div");
    familyInfoContainer.className = "family-info-container";

    const familyNameFieldContainer =
      document.createElement("div");
      familyNameFieldContainer.className =
      "field";
    const familyNameLabel = document.createElement("label");
    familyNameLabel.textContent = "Family name:";
    familyNameLabel.htmlFor = "family-name-input";
    const familyNameInput = document.createElement("input");
    familyNameInput.name = "family-name";
    familyNameInput.id = "family-name-input";
    familyNameInput.required = true;
    familyNameFieldContainer.appendChild(familyNameLabel);
    familyNameFieldContainer.appendChild(familyNameInput);

    const emailFieldContainer = document.createElement("div");
    emailFieldContainer.className =
      "field";
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.htmlFor = "email-input";
    const emailInput = document.createElement("input");
    emailInput.name = "email";
    emailInput.id = "email-input";
    emailInput.required = true;
    emailFieldContainer.appendChild(emailLabel);
    emailFieldContainer.appendChild(emailInput);

    const numPeopleFieldContainer = NumPeopleFieldContainerCreator.Create();

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

    const stayInChaletCheckboxContainer = document.createElement("div");
    stayInChaletCheckboxContainer.id = "chalet-checkbox-container";
    const stayInChaletCheckboxLabel = document.createElement("label");
    stayInChaletCheckboxLabel.textContent = "We will stay in a chalet:";
    const stayInChaletCheckbox = document.createElement("input");
    stayInChaletCheckbox.type = "checkbox";
    stayInChaletCheckbox.id = "chalet-checkbox";
    stayInChaletCheckboxContainer.appendChild(stayInChaletCheckboxLabel);
    stayInChaletCheckboxContainer.appendChild(stayInChaletCheckbox);

    const stayInRvCheckboxContainer = document.createElement("div");
    stayInRvCheckboxContainer.id = "stay-in-rv-checkbox-container";
    const stayInRvCheckboxLabel = document.createElement("label");
    stayInRvCheckboxLabel.textContent = "We will stay in an rv:";
    const stayInRvCheckbox = document.createElement("input");
    stayInRvCheckbox.type = "checkbox";
    stayInRvCheckbox.id = "stay-in-rv-checkbox";
    stayInRvCheckboxContainer.appendChild(stayInRvCheckboxLabel);
    stayInRvCheckboxContainer.appendChild(stayInRvCheckbox);

    const stayInTentCheckboxContainer = document.createElement("div");
    stayInTentCheckboxContainer.id = "tent-checkbox-container";
    const stayInTentCheckboxLabel = document.createElement("label");
    stayInTentCheckboxLabel.textContent = "We will stay in tent(s):";
    const stayInTentCheckbox = document.createElement("input");
    stayInTentCheckbox.type = "checkbox";
    stayInTentCheckbox.id = "tent-checkbox";
    stayInTentCheckboxContainer.appendChild(stayInTentCheckboxLabel);
    stayInTentCheckboxContainer.appendChild(stayInTentCheckbox);

    const sleepOnGroundCheckboxContainer = document.createElement("div");
    sleepOnGroundCheckboxContainer.id = "sleep-on-ground-checkbox-container";
    const sleepOnGroundCheckboxLabel = document.createElement("label");
    sleepOnGroundCheckboxLabel.textContent = "We will sleep on the ground:";
    const sleepOnGroundCheckbox = document.createElement("input");
    sleepOnGroundCheckbox.type = "checkbox";
    sleepOnGroundCheckbox.id = "sleep-on-ground-checkbox";
    sleepOnGroundCheckboxContainer.appendChild(sleepOnGroundCheckboxLabel);
    sleepOnGroundCheckboxContainer.appendChild(sleepOnGroundCheckbox);

    const stayOvernightCheckboxContainer = document.createElement("div");
    stayOvernightCheckboxContainer.id = "stay-overnight-checkbox-container";
    const stayOvernightCheckboxLabel = document.createElement("label");
    stayOvernightCheckboxLabel.textContent = "We will stay overnight:";
    const stayOvernightCheckbox = document.createElement("input");
    stayOvernightCheckbox.type = "checkbox";
    stayOvernightCheckbox.id = "stay-overnight-checkbox";
    stayOvernightCheckboxContainer.appendChild(stayOvernightCheckboxLabel);
    stayOvernightCheckboxContainer.appendChild(stayOvernightCheckbox);

    const dayUseOnlyCheckboxContainer = document.createElement("div");
    dayUseOnlyCheckboxContainer.id = "day-use-only-checkbox-container";
    const dayUseOnlyCheckboxLabel = document.createElement("label");
    dayUseOnlyCheckboxLabel.textContent = "Day use only:";
    const dayUseOnlyCheckbox = document.createElement("input");
    dayUseOnlyCheckbox.type = "checkbox";
    dayUseOnlyCheckbox.id = "day-use-only-checkbox";
    dayUseOnlyCheckboxContainer.appendChild(dayUseOnlyCheckboxLabel);
    dayUseOnlyCheckboxContainer.appendChild(dayUseOnlyCheckbox);

    familyInfoContainer.appendChild(familyNameFieldContainer);
    familyInfoContainer.appendChild(emailFieldContainer);
    familyInfoContainer.appendChild(numPeopleFieldContainer);
    familyInfoContainer.appendChild(requestStaffAndVolunteerInformationCheckboxContainer);
    familyInfoContainer.appendChild(requestScholarshipFormCheckboxContainer);
    familyInfoContainer.appendChild(requestClergyDiscountCheckboxContainer);
    familyInfoContainer.appendChild(requestPaymentPlanInformationCheckboxContainer);
    familyInfoContainer.appendChild(stayInChaletCheckboxContainer);
    familyInfoContainer.appendChild(stayInRvCheckboxContainer);
    familyInfoContainer.appendChild(stayInTentCheckboxContainer);
    familyInfoContainer.appendChild(sleepOnGroundCheckboxContainer);
    familyInfoContainer.appendChild(stayOvernightCheckboxContainer);
    familyInfoContainer.appendChild(dayUseOnlyCheckboxContainer);

    return familyInfoContainer;
  },
};

export default FamilyInfoContainerCreator;
