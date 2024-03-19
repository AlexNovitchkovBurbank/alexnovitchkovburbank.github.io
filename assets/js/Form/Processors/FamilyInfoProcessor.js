import FamilyInfoContainerCreator from '../Creators/FamilyInfoContainerCreator.js';
import FormBodyAppender from '../Appenders/FormBodyAppender.js';

const FamilyInfoProcessor = {
    Process() {
      const familyInfoContainer = FamilyInfoContainerCreator.Create();
  
      FormBodyAppender.Append(familyInfoContainer);
    },
  };

export default FamilyInfoProcessor;
