import CreateNumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
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

        const formFieldFlexNumPeopleContainerElement =
          CreateNumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const stayOvernightContainer = document.querySelector(
          "#stay-overnight-container"
        );
        stayOvernightContainer.appendChild(
          formFieldFlexNumPeopleContainerElement
        );
      } else stayOvernightNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onStayOvernightCheckboxClickProcessor;
