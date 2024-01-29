import FamilyInfoContainerLargeCreator from '../Creators/familyInfoLargeCreator.js';
import ToFormBodyAppender from '../Appenders/appendToFormBody.js';

const DisplayFamilyInfoProcessor = {
    Process() {
      const familyInfoContainer = FamilyInfoContainerLargeCreator.Create();
  
      ToFormBodyAppender.Append(familyInfoContainer);
    },
  };

export default DisplayFamilyInfoProcessor;