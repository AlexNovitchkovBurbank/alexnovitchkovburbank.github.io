import numBedsFieldContainerForChaletCheckboxCreator from "../../form/creators/numBedsFieldContainerForChaletCheckboxCreator.js";
import numNightsFieldContainerForChaletCheckboxCreator from "../../form/creators/numNightsFieldContainerForChaletCheckboxCreator.js";
import numPeopleFieldContainerForChaletCheckboxCreator from "../../form/creators/numPeopleFieldContainerForChaletCheckboxCreator.js";
import chaletCheckboxFieldsRemover from "../removers/chaletCheckboxFieldsRemover.js";

const onChaletCheckboxClickProcessor = {
  Process() {
    const chaletCheckboxContainer = document.querySelector(
      "#chalet-checkbox"
    );

    try {
      if (chaletCheckboxContainer.checked) {
        const numPeopleFieldContainer = numPeopleFieldContainerForChaletCheckboxCreator.Create();
        const numNightsFieldContainer = numNightsFieldContainerForChaletCheckboxCreator.Create();
        const numBedsFieldContainer = numBedsFieldContainerForChaletCheckboxCreator.Create();

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
      } else chaletCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onChaletCheckboxClickProcessor;
