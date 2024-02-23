import NumPeopleContainerCreator from "./NumPeopleContainerCreator.js";

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
    familyNameLabel.htmlFor = "family-name";
    const familyNameInput = document.createElement("input");
    familyNameInput.type = "text";
    familyNameInput.name = "family-name";
    familyNameInput.id = "family-name";
    familyNameInput.required = true;
    familyNameFieldContainer.appendChild(familyNameLabel);
    familyNameFieldContainer.appendChild(familyNameInput);

    const emailFieldContainer = document.createElement("div");
    emailFieldContainer.className =
      "field";
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    emailLabel.htmlFor = "email";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.required = true;
    emailFieldContainer.appendChild(emailLabel);
    emailFieldContainer.appendChild(emailInput);

    const nameForInput = "number-of-people";
    const idForInput = "num-people-input";
    const numPeopleFieldContainer = NumPeopleContainerCreator.Create(idForInput, nameForInput);

    const stayInChaletContainer = document.createElement("div");
    stayInChaletContainer.id = "stay-in-chalet-container";
    const stayInChaletCheckboxLabel = document.createElement("label");
    stayInChaletCheckboxLabel.textContent = "We will stay in a chalet:";
    const stayInChaletCheckbox = document.createElement("input");
    stayInChaletCheckbox.type = "checkbox";
    stayInChaletCheckbox.id = "stay-in-chalet-checkbox";
    stayInChaletContainer.appendChild(stayInChaletCheckboxLabel);
    stayInChaletContainer.appendChild(stayInChaletCheckbox);

    const stayInRvContainer = document.createElement("div");
    stayInRvContainer.id = "stay-in-rv-container";
    const stayInRvCheckboxLabel = document.createElement("label");
    stayInRvCheckboxLabel.textContent = "We will stay in an RV:";
    const stayInRvCheckbox = document.createElement("input");
    stayInRvCheckbox.type = "checkbox";
    stayInRvCheckbox.id = "stay-in-rv-checkbox";
    stayInRvContainer.appendChild(stayInRvCheckboxLabel);
    stayInRvContainer.appendChild(stayInRvCheckbox);

    const stayInTentContainer = document.createElement("div");
    stayInTentContainer.id = "stay-in-tent-container";
    const stayInTentCheckboxLabel = document.createElement("label");
    stayInTentCheckboxLabel.textContent = "We will stay in tent(s):";
    const stayInTentCheckbox = document.createElement("input");
    stayInTentCheckbox.type = "checkbox";
    stayInTentCheckbox.id = "stay-in-tent-checkbox";
    stayInTentContainer.appendChild(stayInTentCheckboxLabel);
    stayInTentContainer.appendChild(stayInTentCheckbox);

    const sleepOnGroundContainer = document.createElement("div");
    sleepOnGroundContainer.id = "sleep-on-ground-container";
    const sleepOnGroundCheckboxLabel = document.createElement("label");
    sleepOnGroundCheckboxLabel.textContent = "We will sleep on the ground:";
    const sleepOnGroundCheckbox = document.createElement("input");
    sleepOnGroundCheckbox.type = "checkbox";
    sleepOnGroundCheckbox.id = "sleep-on-ground-checkbox";
    sleepOnGroundContainer.appendChild(sleepOnGroundCheckboxLabel);
    sleepOnGroundContainer.appendChild(sleepOnGroundCheckbox);

    const stayOvernightContainer = document.createElement("div");
    stayOvernightContainer.id = "stay-overnight-container";
    const stayOvernightCheckboxLabel = document.createElement("label");
    stayOvernightCheckboxLabel.textContent = "We will stay overnight:";
    const stayOvernightCheckbox = document.createElement("input");
    stayOvernightCheckbox.type = "checkbox";
    stayOvernightCheckbox.id = "stay-overnight-checkbox";
    stayOvernightContainer.appendChild(stayOvernightCheckboxLabel);
    stayOvernightContainer.appendChild(stayOvernightCheckbox);

    const dayUseOnlyContainer = document.createElement("div");
    dayUseOnlyContainer.id = "day-use-only-container";
    const dayUseOnlyCheckboxLabel = document.createElement("label");
    dayUseOnlyCheckboxLabel.textContent = "Day use only:";
    const dayUseOnlyCheckbox = document.createElement("input");
    dayUseOnlyCheckbox.type = "checkbox";
    dayUseOnlyCheckbox.id = "day-use-only-checkbox";
    dayUseOnlyContainer.appendChild(dayUseOnlyCheckboxLabel);
    dayUseOnlyContainer.appendChild(dayUseOnlyCheckbox);

    familyInfoContainer.appendChild(familyNameFieldContainer);
    familyInfoContainer.appendChild(emailFieldContainer);
    familyInfoContainer.appendChild(numPeopleFieldContainer);
    familyInfoContainer.appendChild(stayInChaletContainer);
    familyInfoContainer.appendChild(stayInRvContainer);
    familyInfoContainer.appendChild(stayInTentContainer);
    familyInfoContainer.appendChild(sleepOnGroundContainer);
    familyInfoContainer.appendChild(stayOvernightContainer);
    familyInfoContainer.appendChild(dayUseOnlyContainer);

    return familyInfoContainer;
  },
};

export default FamilyInfoContainerCreator;
