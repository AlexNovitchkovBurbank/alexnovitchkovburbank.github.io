import NumPeopleInputValidator from "../Validators/numPeopleInputValidator.js";
import CurrentFamilyMemberRecordsContainerRemover from '../Removers/CurrentFamilyMemberRecordsContainerRemover.js';
import StringToIntConverter from '../Helpers/stringToInt.js';
import removeCurrentFamilyRecordsContainerValidator from '../Validators/removeCurrentFamilyRecordsContainerValidator.js';
import ContainerForMemberRecordContainersCreator from '../Creators/familyMemberRecordContainerCreator.js';
import ToFormBodyAppender from '../Appenders/FormBodyAppender.js';

const DisplayFamilyMemberRecordsProcessor = {
    Process(numberOfPeopleString) {
      const numPeopleValidInt = NumPeopleInputValidator.Validate(numberOfPeopleString);

      if (!numPeopleValidInt) {
        CurrentFamilyMemberRecordsContainerRemover.Remove();
        createVisualErrorForNumPeopleField();

        return;
      }

      const errorOnNumPeopleField = isErrorOnNumPeopleField();
      
      if (errorOnNumPeopleField)
        removeVisualErrorFromNumPeopleField();
  
      const numberOfPeopleInt =
        StringToIntConverter.Convert(numberOfPeopleString);
  
      const shouldRemoveFamilyMemberRecords =
      removeCurrentFamilyRecordsContainerValidator.Validate(numberOfPeopleInt);
  
      if (shouldRemoveFamilyMemberRecords) {
        CurrentFamilyMemberRecordsContainerRemover.Remove();
  
        const numPeopleRecordsContainer =
        ContainerForMemberRecordContainersCreator.Create(numberOfPeopleInt);
  
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

  export default DisplayFamilyMemberRecordsProcessor;