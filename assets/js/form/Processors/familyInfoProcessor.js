import FamilyInfoContainerCreator from '../Creators/familyInfoCreator.js';
import ToFormBodyAppender from '../Appenders/appendToFormBody.js';

const DisplayFamilyInfoProcessor = {
    Process() {
      const familyInfoContainer = FamilyInfoContainerCreator.Create();
  
      ToFormBodyAppender.Append(familyInfoContainer);
    },
  };

export default DisplayFamilyInfoProcessor;