import NumPeopleInputValidator from "../Validators/numPeopleInputValidator.js";
import OtherFamilyMemberRecordsRemover from '../Removers/otherFamilyMemberRecordsRemover.js';
import StringToIntConverter from '../Helpers/stringToInt.js';
import RemoveOtherFamilyRecordsValidator from '../Validators/removeOtherFamilyRecordsValidator.js';
import ContainerForLargeScreenMemberRecordContainersCreator from '../Creators/otherFamilyMemberRecordsLargeCreator.js';
import ToFormBodyAppender from '../Appenders/appendToFormBody.js';

const DisplayOtherFamilyRecordsProcessor = {
    Process(numberOfPeopleString) {
      const numPeopleValidInt = NumPeopleInputValidator.Validate(numberOfPeopleString);

      if (!numPeopleValidInt) {
        OtherFamilyMemberRecordsRemover.Remove();
        createVisualErrorForNumPeopleField();

        return;
      }

      const errorOnNumPeopleField = isErrorOnNumPeopleField();
      
      if (errorOnNumPeopleField)
        removeVisualErrorFromNumPeopleField();
  
      const numberOfPeopleInt =
        StringToIntConverter.Convert(numberOfPeopleString);
  
      const shouldRemoveOtherMemberRecords =
        RemoveOtherFamilyRecordsValidator.Validate(numberOfPeopleInt);
  
      if (shouldRemoveOtherMemberRecords) {
        OtherFamilyMemberRecordsRemover.Remove();
  
        const numPeopleRecordsContainer =
        ContainerForLargeScreenMemberRecordContainersCreator.Create(numberOfPeopleInt);
  
        ToFormBodyAppender.Append(numPeopleRecordsContainer);
      }
    },
  };

  const createVisualErrorForNumPeopleField = function CreateVisualErrorForNumPeopleField() {
    const numPeopleInput = document.querySelector("#num-people-input");

    if (numPeopleInput !== null)
      numPeopleInput.classList.add("input-error");
  }

  const removeVisualErrorFromNumPeopleField = function RemoveVisualErrorFromNumPeopleField() {
    const numPeopleInput = document.querySelector("#num-people-input");

    if (numPeopleInput !== null)
      numPeopleInput.classList.remove("input-error");
  }

  const isErrorOnNumPeopleField = function isErrorClassOnNumPeopleField() {
    const numPeopleInput = document.querySelector("#num-people-input");

    if (numPeopleInput !== null) {
      if (!numPeopleInput.classList.contains("input-error"))
        return false;
      return true;
    }

    return true;
  }

  export default DisplayOtherFamilyRecordsProcessor;