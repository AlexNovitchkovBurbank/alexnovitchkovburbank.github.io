import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import NumNightsContainerCreator from "../Creators/NumNightsContainerCreator.js";
import stayOvernightNumberOfPeopleRemover from "../Removers/familyInfoStayOvernightNumPeopleRemover.js";

const onStayOvernightCheckboxClickProcessor = {
  Process() {
    const stayOvernightCheckboxElement = document.querySelector(
      "#stay-overnight-checkbox"
    );

    try {
      if (stayOvernightCheckboxElement.checked) {
        const numPeopleInputName = "number-of-overnight-stayers";
        const numPeopleInputId = "num-people-stay-overnight";

        const formFieldNumPeopleContainerElement =
        NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const numNightsInputName = "number-of-nights";
        const numNightsInputId = "num-nights";

        const formFieldNumNightsContainerElement =
        NumNightsContainerCreator.Create(numNightsInputId, numNightsInputName);

        const stayOvernightContainer = document.querySelector(
          "#stay-overnight-container"
        );
        stayOvernightContainer.appendChild(
          formFieldNumPeopleContainerElement
        );
        stayOvernightContainer.appendChild(
          formFieldNumNightsContainerElement
        );
      } else stayOvernightNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onStayOvernightCheckboxClickProcessor;
