import CreateNumPeopleContainerCreator from "./Creators/NumPeopleContainerCreator.js";
import stayOvernightNumberOfPeopleRemover from "./Removers/familyInfoStayOvernightNumPeopleRemover.js";

const onStayOvernightCheckboxClickProcessor = {
  Process() {
    const stayOvernightCheckboxElement = document.querySelector(
      "#stay-in-tent-checkbox"
    );

    try {
      if (stayOvernightCheckboxElement.checked) {
        const formFieldFlexNumPeopleContainerElement =
          CreateNumPeopleContainerCreator.Create();

        const stayOvernightContainer = document.querySelector(
          "#stay-in-tent-container"
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
