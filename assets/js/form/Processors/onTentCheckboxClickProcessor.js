import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import stayInTentNumberOfPeopleRemover from "../Removers/familyInfoStayInTentNumPeopleRemover.js";

const onTentCheckboxClickProcessor = {
  Process() {
    const stayInTentCheckboxContainer = document.querySelector(
      "#stay-in-tent-checkbox"
    );

    try {
      if (stayInTentCheckboxContainer.checked) {
        const numPeopleInputName = "number-of-people-in-tent(s)";
        const numPeopleInputId = "num-people-in-tent";

        const formFieldNumPeopleContainer =
          NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const stayInTentContainer = document.querySelector(
          "#stay-in-tent-container"
        );
        stayInTentContainer.appendChild(
          formFieldNumPeopleContainer
        );
      } else stayInTentNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onTentCheckboxClickProcessor;
