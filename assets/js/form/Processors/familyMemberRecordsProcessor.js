import NumPeopleInputValidator from "../Validators/NumPeopleInputValidator.js";
import CurrentFamilyMemberRecordsContainerRemover from '../Removers/CurrentFamilyMemberRecordsContainerRemover.js';
import StringToIntConverter from '../Converters/StringToIntConverter.js';
import RemoveCurrentFamilyRecordsContainerValidator from '../Validators/RemoveCurrentFamilyRecordsContainerValidator.js';
import ContainerForMemberRecordContainersCreator from '../Creators/ContainerForMemberRecordContainersCreator.js';
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const FamilyMemberRecordsProcessor = {
    Process(numberOfPeopleString) {
      const numPeopleValidInt = NumPeopleInputValidator.Validate(numberOfPeopleString);

      if (!numPeopleValidInt) {
        CurrentFamilyMemberRecordsContainerRemover.Remove();
        
        return;
      }
  
      const numberOfPeopleInt =
        StringToIntConverter.Convert(numberOfPeopleString);
  
      const shouldRemoveFamilyMemberRecords =
      RemoveCurrentFamilyRecordsContainerValidator.Validate(numberOfPeopleInt);
  
      if (shouldRemoveFamilyMemberRecords) {
        CurrentFamilyMemberRecordsContainerRemover.Remove();
  
        const numPeopleRecordsContainer =
        ContainerForMemberRecordContainersCreator.Create(numberOfPeopleInt);
  
        FormBodyAppender.Append(numPeopleRecordsContainer);
      }
    },
  };

  export default FamilyMemberRecordsProcessor;