import NumNightsFieldContainerForOvernightStayCheckboxCreator from "../Creators/NumNightsFieldContainerForOvernightStayCheckboxCreator.js";
import StayOvernightNumberOfPeopleRemover from "../Removers/StayOvernightNumPeopleRemover.js";

const OnStayOvernightCheckboxClickProcessor = {
  Process() {
    const stayOvernightCheckboxContainer = document.querySelector(
      "#stay-overnight-checkbox"
    );

    try {
      if (stayOvernightCheckboxContainer.checked) {
        const numNightsFieldContainer = NumNightsFieldContainerForOvernightStayCheckboxCreator.Create();

        const stayOvernightCheckboxContainer = document.querySelector(
          "#stay-overnight-checkbox-container"
        );
        stayOvernightCheckboxContainer.appendChild(
          numNightsFieldContainer
        );
      } else StayOvernightNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnStayOvernightCheckboxClickProcessor;
