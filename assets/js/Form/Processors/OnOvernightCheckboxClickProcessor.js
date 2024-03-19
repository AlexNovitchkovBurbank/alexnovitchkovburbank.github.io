import NumNightsFieldContainerForOvernightCheckboxCreator from "../Creators/NumNightsFieldContainerForOvernightCheckboxCreator.js";
import NumPeopleFieldContainerForOvernightCheckboxCreator from "../Creators/NumPeopleFieldContainerForOvernightCheckboxCreator.js";
import OvernightCheckboxFieldsRemover from "../Removers/OvernightCheckboxFieldsRemover.js";

const OnStayOvernightCheckboxClickProcessor = {
  Process() {
    const stayOvernightCheckboxContainer = document.querySelector(
      "#overnight-checkbox"
    );

    try {
      if (stayOvernightCheckboxContainer.checked) {
        const numPeopleFieldContainer = NumPeopleFieldContainerForOvernightCheckboxCreator.Create();
        const numNightsFieldContainer = NumNightsFieldContainerForOvernightCheckboxCreator.Create();

        const stayOvernightCheckboxContainer = document.querySelector(
          "#overnight-checkbox-container"
        );
        
        stayOvernightCheckboxContainer.appendChild(
          numPeopleFieldContainer
        );
        stayOvernightCheckboxContainer.appendChild(
          numNightsFieldContainer
        );
      } else OvernightCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnStayOvernightCheckboxClickProcessor;
