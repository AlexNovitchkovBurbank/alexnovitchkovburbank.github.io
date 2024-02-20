import CreateNumPeopleContainerCreator from "./Creators/NumPeopleContainerCreator.js";
import sleepOnGroundNumberOfPeopleRemover from "./Removers/familyInfoSleepOnGroundNumPeopleRemover.js";

const onSleepOnGroundCheckboxClickProcessor = {
  Process() {
    const sleepOnGroundCheckboxElement = document.querySelector(
      "#sleep-on-ground-checkbox"
    );

    try {
      if (sleepOnGroundCheckboxElement.checked) {
        const formFieldFlexNumPeopleContainerElement =
          CreateNumPeopleContainerCreator.Create();

        const sleepOnGroundContainer = document.querySelector(
          "#sleep-on-ground-container"
        );
        sleepOnGroundContainer.appendChild(
          formFieldFlexNumPeopleContainerElement
        );
      } else sleepOnGroundNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onSleepOnGroundCheckboxClickProcessor;
