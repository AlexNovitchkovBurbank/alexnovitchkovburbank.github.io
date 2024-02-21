import CreateNumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import stayInTentNumberOfPeopleRemover from "../Removers/familyInfoStayInTentNumPeopleRemover.js";

const onTentCheckboxClickProcessor = {
  Process() {
    const stayInTentCheckboxElement = document.querySelector(
      "#stay-in-tent-checkbox"
    );

    try {
      if (stayInTentCheckboxElement.checked) {
        const numPeopleInputName = "number-of-people-in-tent(s)";
        const numPeopleInputId = "num-people-in-tent";

        const formFieldFlexNumPeopleContainerElement =
          CreateNumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

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
