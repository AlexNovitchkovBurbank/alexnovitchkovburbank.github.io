import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import NumNightsContainerCreator from "../Creators/NumNightsContainerCreator.js";
import stayOvernightNumberOfPeopleRemover from "../Removers/familyInfoStayOvernightNumPeopleRemover.js";

const onStayOvernightCheckboxClickProcessor = {
  Process() {
    const stayOvernightCheckboxContainer = document.querySelector(
      "#stay-overnight-checkbox"
    );

    try {
      if (stayOvernightCheckboxContainer.checked) {
        const numPeopleInputName = "number-of-overnight-stayers";
        const numPeopleInputId = "num-people-stay-overnight";

        const formFieldNumPeopleContainer =
        NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const numNightsInputName = "number-of-nights";
        const numNightsInputId = "num-nights";

        const formFieldNumNightsContainer =
        NumNightsContainerCreator.Create(numNightsInputId, numNightsInputName);

        const stayOvernightContainer = document.querySelector(
          "#stay-overnight-container"
        );
        stayOvernightContainer.appendChild(
          formFieldNumPeopleContainer
        );
        stayOvernightContainer.appendChild(
          formFieldNumNightsContainer
        );
      } else stayOvernightNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onStayOvernightCheckboxClickProcessor;
