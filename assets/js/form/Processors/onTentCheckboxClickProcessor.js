import CreateNumPeopleContainerCreator from "./Creators/NumPeopleContainerCreator.js";
import stayInTentNumberOfPeopleRemover from "./Removers/familyInfoStayInTentsNumPeopleRemover.js";

const onTentCheckboxClickProcessor = {
  Process() {
    const stayInTentCheckboxElement = document.querySelector(
      "#stay-in-tent-checkbox"
    );

    try {
      if (stayInTentCheckboxElement.checked) {
        const formFieldFlexNumPeopleContainerElement =
          CreateNumPeopleContainerCreator.Create();

        const stayInTentContainer = document.querySelector(
          "#stay-in-tent-container"
        );
        stayInTentContainer.appendChild(
          formFieldFlexNumPeopleContainerElement
        );
      } else stayInTentNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onTentCheckboxClickProcessor;
