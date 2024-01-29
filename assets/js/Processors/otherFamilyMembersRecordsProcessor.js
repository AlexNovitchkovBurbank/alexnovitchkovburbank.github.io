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
        throw new Error("The number of people must be an number");
      }
  
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

  export default DisplayOtherFamilyRecordsProcessor;