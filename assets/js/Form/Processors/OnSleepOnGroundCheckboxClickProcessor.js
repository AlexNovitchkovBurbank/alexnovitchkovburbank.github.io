import NumPeopleFieldContainerForSleepOnGroundCheckboxCreator from "../Creators/NumPeopleFieldContainerForSleepOnGroundCheckboxCreator.js";
import SleepOnGroundNumberOfPeopleRemover from "../Removers/SleepOnGroundNumPeopleRemover.js";

const OnSleepOnGroundCheckboxClickProcessor = {
  Process() {
    const sleepOnGroundCheckboxContainer = document.querySelector(
      "#sleep-on-ground-checkbox"
    );

    try {
      if (sleepOnGroundCheckboxContainer.checked) {
        const sleepOnGroundFieldContainer = NumPeopleFieldContainerForSleepOnGroundCheckboxCreator.Create();
        const sleepOnGroundCheckboxContainer = document.querySelector(
          "#sleep-on-ground-checkbox-container"
        );
        sleepOnGroundCheckboxContainer.appendChild(
          sleepOnGroundFieldContainer
        );
      } else SleepOnGroundNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnSleepOnGroundCheckboxClickProcessor;
