import NumBedsFieldContainerForChaletCheckboxCreator from "../Creators/NumBedsFieldContainerForChaletCheckboxCreator.js";
import NumNightsFieldContainerForChaletCheckboxCreator from "../Creators/NumNightsFieldContainerForChaletCheckboxCreator.js";
import NumPeopleFieldContainerForChaletCheckboxCreator from "../Creators/NumPeopleFieldContainerForChaletCheckboxCreator.js";
import ChaletCheckboxFieldsRemover from "../Removers/ChaletCheckboxFieldsRemover.js";

const OnChaletCheckboxClickProcessor = {
  Process() {
    const chaletCheckboxContainer = document.querySelector(
      "#chalet-checkbox"
    );

    try {
      if (chaletCheckboxContainer.checked) {
        const numPeopleFieldContainer = NumPeopleFieldContainerForChaletCheckboxCreator.Create();
        const numNightsFieldContainer = NumNightsFieldContainerForChaletCheckboxCreator.Create();
        const numBedsFieldContainer = NumBedsFieldContainerForChaletCheckboxCreator.Create();

        const chaletCheckboxContainer = document.querySelector(
          "#chalet-checkbox-container"
        );
      
        chaletCheckboxContainer.appendChild(
          numPeopleFieldContainer
        );
        chaletCheckboxContainer.appendChild(
          numNightsFieldContainer
        );
        chaletCheckboxContainer.appendChild(
          numBedsFieldContainer
        );
      } else ChaletCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnChaletCheckboxClickProcessor;
