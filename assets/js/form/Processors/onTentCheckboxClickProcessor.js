import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
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

        const formFieldNumPeopleContainerElement =
          NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const stayInTentContainer = document.querySelector(
          "#stay-in-tent-container"
        );
        stayInTentContainer.appendChild(
          formFieldNumPeopleContainerElement
        );
      } else stayInTentNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onTentCheckboxClickProcessor;
