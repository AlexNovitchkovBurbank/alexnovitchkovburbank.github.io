import NumPeopleFieldContainerCreator from "./NumPeopleFieldContainerCreator.js";

const FamilyInfoContainerCreator = {
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

    const ChaletCheckboxContainer = document.createElement("div");
    ChaletCheckboxContainer.id = "chalet-checkbox-container";
    const ChaletCheckboxFieldContainer = document.createElement("div");
    ChaletCheckboxFieldContainer.id = "chalet-checkbox-field-container";
    const ChaletCheckboxLabel = document.createElement("label");
    ChaletCheckboxLabel.textContent = "We will stay in a chalet:";
    const ChaletCheckbox = document.createElement("input");
    ChaletCheckbox.type = "checkbox";
    ChaletCheckbox.id = "chalet-checkbox";
    ChaletCheckboxFieldContainer.appendChild(ChaletCheckboxLabel);
    ChaletCheckboxFieldContainer.appendChild(ChaletCheckbox);
    ChaletCheckboxContainer.appendChild(ChaletCheckboxFieldContainer);

    const RvCheckboxContainer = document.createElement("div");
    RvCheckboxContainer.id = "rv-checkbox-container";
    const RvCheckboxFieldContainer = document.createElement("div");
    RvCheckboxFieldContainer.id = "rv-checkbox-field-container";
    const RvCheckboxLabel = document.createElement("label");
    RvCheckboxLabel.textContent = "We will stay in an rv:";
    const RvCheckbox = document.createElement("input");
    RvCheckbox.type = "checkbox";
    RvCheckbox.id = "rv-checkbox";
    RvCheckboxFieldContainer.appendChild(RvCheckboxLabel);
    RvCheckboxFieldContainer.appendChild(RvCheckbox);
    RvCheckboxContainer.appendChild(RvCheckboxFieldContainer);

    const TentCheckboxContainer = document.createElement("div");
    TentCheckboxContainer.id = "tent-checkbox-container";
    const TentCheckboxFieldContainer = document.createElement("div");
    TentCheckboxFieldContainer.id = "tent-checkbox-field-container";
    const TentCheckboxLabel = document.createElement("label");
    TentCheckboxLabel.textContent = "We will stay in tent(s):";
    const TentCheckbox = document.createElement("input");
    TentCheckbox.type = "checkbox";
    TentCheckbox.id = "tent-checkbox";
    TentCheckboxFieldContainer.appendChild(TentCheckboxLabel);
    TentCheckboxFieldContainer.appendChild(TentCheckbox);
    TentCheckboxContainer.appendChild(TentCheckboxFieldContainer);

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

    const firstMealOption1 = document.createElement("option");
    firstMealOption1.text = "Breakfast";
    const firstMealOption2 = document.createElement("option");
    firstMealOption2.text = "Lunch";
    const firstMealOption3 = document.createElement("option");
    firstMealOption3.text = "Dinner";
    const firstMealContainer = document.createElement("div");
    const firstMealDayFieldContainer = document.createElement("div");
    const firstMealMealFieldContainer = document.createElement("div");
    const firstMealMealLabel = document.createElement("label");
    firstMealMealLabel.textContent = "First meal";
    const firstMealMealSelector = document.createElement("select");
    firstMealMealSelector.add(firstMealOption1);
    firstMealMealSelector.add(firstMealOption2);
    firstMealMealSelector.add(firstMealOption3);
    const lastMealContainer = document.createElement("div");


    
    familyInfoContainer.appendChild(familyNameFieldContainer);
    familyInfoContainer.appendChild(emailFieldContainer);
    familyInfoContainer.appendChild(numPeopleFieldContainer);
    familyInfoContainer.appendChild(requestStaffAndVolunteerInformationCheckboxContainer);
    familyInfoContainer.appendChild(requestScholarshipFormCheckboxContainer);
    familyInfoContainer.appendChild(requestClergyDiscountCheckboxContainer);
    familyInfoContainer.appendChild(requestPaymentPlanInformationCheckboxContainer);
    familyInfoContainer.appendChild(ChaletCheckboxContainer);
    familyInfoContainer.appendChild(RvCheckboxContainer);
    familyInfoContainer.appendChild(TentCheckboxContainer);
    familyInfoContainer.appendChild(sleepOnGroundCheckboxContainer);
    familyInfoContainer.appendChild(stayOvernightCheckboxContainer);
    familyInfoContainer.appendChild(dayUseOnlyCheckboxContainer);

    return familyInfoContainer;
  },
};

export default FamilyInfoContainerCreator;
