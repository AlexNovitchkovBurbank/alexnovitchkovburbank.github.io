import NumNightsFieldContainerForRvCheckboxCreator from "../Creators/NumNightsFieldContainerForRvCheckboxCreator.js";
import NumRvsFieldContainerForRvCheckboxCreator from "../Creators/NumRvsFieldContainerForRvCheckboxCreator.js";
import NumPeopleFieldContainerForRvCheckboxCreator from "../Creators/NumPeopleFieldContainerForRvCheckboxCreator.js";
import RvCheckboxFieldsRemover from "../Removers/RvCheckboxFieldsRemover.js";

const OnRvCheckboxClickProcessor = {
  Process() {
    const rvCheckboxContainer = document.querySelector(
      "#rv-checkbox"
    );

    try {
      if (rvCheckboxContainer.checked) {
        const numPeopleFieldContainer = NumPeopleFieldContainerForRvCheckboxCreator.Create();
        const numNightsFieldContainer = NumNightsFieldContainerForRvCheckboxCreator.Create();
        const numRvsFieldContainer = NumRvsFieldContainerForRvCheckboxCreator.Create();

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
      } else RvCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnRvCheckboxClickProcessor;
