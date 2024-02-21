import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import sleepOnGroundNumberOfPeopleRemover from "../Removers/familyInfoSleepOnGroundNumPeopleRemover.js";

const onSleepOnGroundCheckboxClickProcessor = {
  Process() {
    const sleepOnGroundCheckboxElement = document.querySelector(
      "#sleep-on-ground-checkbox"
    );

    try {
      if (sleepOnGroundCheckboxElement.checked) {
        const numPeopleInputName = "number-of-people-to-sleep-on-the-ground";
        const numPeopleInputId = "num-people-sleep-on-ground";

        const formFieldNumPeopleContainerElement =
          NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const sleepOnGroundContainer = document.querySelector(
          "#sleep-on-ground-container"
        );
        sleepOnGroundContainer.appendChild(
          formFieldNumPeopleContainerElement
        );
      } else sleepOnGroundNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onSleepOnGroundCheckboxClickProcessor;
