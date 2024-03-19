import NumPeopleFieldContainerForSleepOnGroundCheckboxCreator from "../Creators/NumPeopleFieldContainerForSleepOnGroundCheckboxCreator.js";
import NumNightsFieldContainerForSleepOnGroundCheckboxCreator from "../Creators/NumNightsFieldContainerForSleepOnGroundCheckboxCreator.js";
import SleepOnGroundCheckboxFieldsRemover from "../Removers/SleepOnGroundCheckboxFieldsRemover.js";

const OnSleepOnGroundCheckboxClickProcessor = {
  Process() {
    const sleepOnGroundCheckboxContainer = document.querySelector(
      "#sleep-on-ground-checkbox"
    );

    try {
      if (sleepOnGroundCheckboxContainer.checked) {
        const numPeopleSleepOnGroundFieldContainer = NumPeopleFieldContainerForSleepOnGroundCheckboxCreator.Create();
        const numNightsSleepOnGroundFieldContainer = NumNightsFieldContainerForSleepOnGroundCheckboxCreator.Create();

        const sleepOnGroundCheckboxContainer = document.querySelector(
          "#sleep-on-ground-checkbox-container"
        );

        sleepOnGroundCheckboxContainer.appendChild(
          numPeopleSleepOnGroundFieldContainer
        );
        sleepOnGroundCheckboxContainer.appendChild(
          numNightsSleepOnGroundFieldContainer
        );
      } else SleepOnGroundCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnSleepOnGroundCheckboxClickProcessor;
