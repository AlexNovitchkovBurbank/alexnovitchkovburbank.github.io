import numPeopleInputValidator from "../Validators/numPeopleInputValidator.js";
import numPeopleInputErrorRemover from "../Removers/numPeopleInputErrorRemover.js";
import currentFamilyMemberRecordsContainerRemover from '../Removers/currentFamilyMemberRecordsContainerRemover.js';
import stringToIntConverter from '../../form/Converters/stringToIntConverter.js';
import removeCurrentFamilyRecordsContainerValidator from '../Validators/removeCurrentFamilyRecordsContainerValidator.js';
import memberRecordsContainerCreator from '../../form/Creators/memberRecordsContainerCreator.js';
import formBodyAppender from '../appenders/formBodyAppender.js';
import NumPeopleInputErrorDisplayer from "../displayers/numPeopleErrorDisplayer.js";

const familyMemberRecordsProcessor = {
    Process(numberOfPeopleString) {
      const numPeopleInputId = "num-people-input";
      const numPeopleValidInt = numPeopleInputValidator.Validate(numberOfPeopleString);

      if (!numPeopleValidInt) {
        currentFamilyMemberRecordsContainerRemover.Remove();
        NumPeopleInputErrorDisplayer.Display(numPeopleInputId);
        
        return;
      }

      numPeopleInputErrorRemover.Remove(numPeopleInputId);
  
      const numberOfPeopleInt =
        stringToIntConverter.Convert(numberOfPeopleString);
  
      const shouldRemoveCurrentFamilyMemberRecords =
      removeCurrentFamilyRecordsContainerValidator.Validate(numberOfPeopleInt);
  
      if (shouldRemoveCurrentFamilyMemberRecords) {
        currentFamilyMemberRecordsContainerRemover.Remove();
  
        const numPeopleRecordsContainer =
        memberRecordsContainerCreator.Create(numberOfPeopleInt);
  
        formBodyAppender.Append(numPeopleRecordsContainer);
      }
    },
  };

  export default familyMemberRecordsProcessor;
