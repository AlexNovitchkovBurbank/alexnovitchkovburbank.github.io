import familyInfoContainerCreator from '../../form/creators/familyInfoContainerCreator.js';
import formBodyAppender from '../appenders/formBodyAppender.js';

const familyInfoProcessor = {
    Process() {
      const familyInfoContainer = familyInfoContainerCreator.Create();
  
      formBodyAppender.Append(familyInfoContainer);
    },
  };

export default familyInfoProcessor;
