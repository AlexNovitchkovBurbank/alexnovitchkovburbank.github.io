const RemoveOtherFamilyRecordsValidator = {
  Validate(numberOfPeopleInt) {
    const firstNameInputs = document.querySelectorAll(
      "[id^=Person][id$=FirstNameInput]"
    ); // Starts with Person and ends with FirstNameInput

    if (firstNameInputs.length !== numberOfPeopleInt) return true;

    return false;
  },
};

export default RemoveOtherFamilyRecordsValidator;
