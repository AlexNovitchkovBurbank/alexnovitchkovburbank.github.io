import numNightsFieldContainerForTentCheckboxCreator from "../../form/creators/numNightsFieldContainerForTentCheckboxCreator.js";
import numTentsFieldContainerForTentCheckboxCreator from "../../form/creators/numTentsFieldContainerForTentCheckboxCreator.js";
import numPeopleFieldContainerForTentCheckboxCreator from "../../form/creators/numPeopleFieldContainerForTentCheckboxCreator.js";
import tentCheckboxFieldsRemover from "../removers/tentCheckboxFieldsRemover.js";

const onTentCheckboxClickProcessor = {
  Process() {
    const tentCheckboxContainer = document.querySelector(
      "#tent-checkbox"
    );

    try {
      if (tentCheckboxContainer.checked) {
        const numPeopleFieldContainer = numPeopleFieldContainerForTentCheckboxCreator.Create();
        const numNightsFieldContainer = numNightsFieldContainerForTentCheckboxCreator.Create();
        const numTentsFieldContainer = numTentsFieldContainerForTentCheckboxCreator.Create();

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
      } else tentCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onTentCheckboxClickProcessor;
