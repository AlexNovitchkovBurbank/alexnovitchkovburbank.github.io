import numNightsFieldContainerForRvCheckboxCreator from "../../form/creators/numNightsFieldContainerForRvCheckboxCreator.js";
import numRvsFieldContainerForRvCheckboxCreator from "../../form/creators/numRvsFieldContainerForRvCheckboxCreator.js";
import numPeopleFieldContainerForRvCheckboxCreator from "../../form/creators/numPeopleFieldContainerForRvCheckboxCreator.js";
import rvCheckboxFieldsRemover from "../removers/rvCheckboxFieldsRemover.js";

const onRvCheckboxClickProcessor = {
  Process() {
    const rvCheckboxContainer = document.querySelector(
      "#rv-checkbox"
    );

    try {
      if (rvCheckboxContainer.checked) {
        const numPeopleFieldContainer = numPeopleFieldContainerForRvCheckboxCreator.Create();
        const numNightsFieldContainer = numNightsFieldContainerForRvCheckboxCreator.Create();
        const numRvsFieldContainer = numRvsFieldContainerForRvCheckboxCreator.Create();

        const rvCheckboxContainer = document.querySelector(
          "#rv-checkbox-container"
        );
      
        rvCheckboxContainer.appendChild(
          numPeopleFieldContainer
        );
        rvCheckboxContainer.appendChild(
          numNightsFieldContainer
        );
        rvCheckboxContainer.appendChild(
          numRvsFieldContainer
        );
      } else rvCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onRvCheckboxClickProcessor;
