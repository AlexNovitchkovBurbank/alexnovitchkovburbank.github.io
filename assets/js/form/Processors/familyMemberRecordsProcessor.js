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
        
        return;
      }
  
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

  export default DisplayFamilyMemberRecordsProcessor;