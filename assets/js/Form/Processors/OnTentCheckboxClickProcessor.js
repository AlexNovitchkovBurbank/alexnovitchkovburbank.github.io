import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import StayInTentNumberOfPeopleRemover from "../Removers/StayInTentNumPeopleRemover.js";

const OnTentCheckboxClickProcessor = {
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
      } else StayInTentNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnTentCheckboxClickProcessor;
