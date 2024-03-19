import numNightsFieldContainerForOvernightCheckboxCreator from "../../form/Creators/numNightsFieldContainerForOvernightCheckboxCreator.js";
import numPeopleFieldContainerForOvernightCheckboxCreator from "../../form/Creators/numPeopleFieldContainerForOvernightCheckboxCreator.js";
import overnightCheckboxFieldsRemover from "../Removers/overnightCheckboxFieldsRemover.js";

const OnStayOvernightCheckboxClickProcessor = {
  Process() {
    const stayOvernightCheckboxContainer = document.querySelector(
      "#overnight-checkbox"
    );

    try {
      if (stayOvernightCheckboxContainer.checked) {
        const numPeopleFieldContainer = numPeopleFieldContainerForOvernightCheckboxCreator.Create();
        const numNightsFieldContainer = numNightsFieldContainerForOvernightCheckboxCreator.Create();

        const stayOvernightCheckboxContainer = document.querySelector(
          "#overnight-checkbox-container"
        );
        
        stayOvernightCheckboxContainer.appendChild(
          numPeopleFieldContainer
        );
        stayOvernightCheckboxContainer.appendChild(
          numNightsFieldContainer
        );
      } else overnightCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnStayOvernightCheckboxClickProcessor;
