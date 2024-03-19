import NumNightsFieldContainerForTentCheckboxCreator from "../Creators/NumNightsFieldContainerForTentCheckboxCreator.js";
import NumTentsFieldContainerForTentCheckboxCreator from "../Creators/NumTentsFieldContainerForTentCheckboxCreator.js";
import NumPeopleFieldContainerForTentCheckboxCreator from "../Creators/NumPeopleFieldContainerForTentCheckboxCreator.js";
import TentCheckboxFieldsRemover from "../Removers/TentCheckboxFieldsRemover.js";

const OnTentCheckboxClickProcessor = {
  Process() {
    const tentCheckboxContainer = document.querySelector(
      "#tent-checkbox"
    );

    try {
      if (tentCheckboxContainer.checked) {
        const numPeopleFieldContainer = NumPeopleFieldContainerForTentCheckboxCreator.Create();
        const numNightsFieldContainer = NumNightsFieldContainerForTentCheckboxCreator.Create();
        const numTentsFieldContainer = NumTentsFieldContainerForTentCheckboxCreator.Create();

        const tentCheckboxContainer = document.querySelector(
          "#tent-checkbox-container"
        );

        tentCheckboxContainer.appendChild(
          numPeopleFieldContainer
        );
        tentCheckboxContainer.appendChild(
          numNightsFieldContainer
        );
        tentCheckboxContainer.appendChild(
          numTentsFieldContainer
        );
      } else TentCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnTentCheckboxClickProcessor;
