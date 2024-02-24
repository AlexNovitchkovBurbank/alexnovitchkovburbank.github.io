import NumPeopleInputValidator from "../Validators/NumPeopleInputValidator.js";
import NumPeopleInputErrorRemover from "../Removers/NumPeopleInputErrorRemover.js";
import CurrentFamilyMemberRecordsContainerRemover from '../Removers/CurrentFamilyMemberRecordsContainerRemover.js';
import StringToIntConverter from '../Converters/StringToIntConverter.js';
import RemoveCurrentFamilyRecordsContainerValidator from '../Validators/RemoveCurrentFamilyRecordsContainerValidator.js';
import MemberRecordsContainerCreator from '../Creators/MemberRecordsContainerCreator.js';
import FormBodyAppender from '../Appenders/FormBodyAppender.js';
import NumPeopleInputErrorDisplayer from "../Displayers/NumPeopleErrorDisplayer.js";

const FamilyMemberRecordsProcessor = {
    Process(numberOfPeopleString) {
      const numPeopleInputId = "num-people-input";
      const numPeopleValidInt = NumPeopleInputValidator.Validate(numberOfPeopleString);

      if (!numPeopleValidInt) {
        CurrentFamilyMemberRecordsContainerRemover.Remove();
        NumPeopleInputErrorDisplayer.Display(numPeopleInputId);
        
        return;
      }

      NumPeopleInputErrorRemover.Remove(numPeopleInputId);
  
      const numberOfPeopleInt =
        StringToIntConverter.Convert(numberOfPeopleString);
  
      const shouldRemoveCurrentFamilyMemberRecords =
      RemoveCurrentFamilyRecordsContainerValidator.Validate(numberOfPeopleInt);
  
      if (shouldRemoveCurrentFamilyMemberRecords) {
        CurrentFamilyMemberRecordsContainerRemover.Remove();
  
        const numPeopleRecordsContainer =
        MemberRecordsContainerCreator.Create(numberOfPeopleInt);
  
        FormBodyAppender.Append(numPeopleRecordsContainer);
      }
    },
  };

  export default FamilyMemberRecordsProcessor;
