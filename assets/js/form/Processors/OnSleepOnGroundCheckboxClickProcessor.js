import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import sleepOnGroundNumberOfPeopleRemover from "../Removers/SleepOnGroundNumPeopleRemover.js";

const OnSleepOnGroundCheckboxClickProcessor = {
  Process() {
    const sleepOnGroundCheckboxContainer = document.querySelector(
      "#sleep-on-ground-checkbox"
    );

    try {
      if (sleepOnGroundCheckboxContainer.checked) {
        const numPeopleInputName = "number-of-people-to-sleep-on-the-ground";
        const numPeopleInputId = "num-people-sleep-on-ground";

        const formFieldNumPeopleContainer =
          NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const sleepOnGroundContainer = document.querySelector(
          "#sleep-on-ground-container"
        );
        sleepOnGroundContainer.appendChild(
          formFieldNumPeopleContainer
        );
      } else sleepOnGroundNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnSleepOnGroundCheckboxClickProcessor;
