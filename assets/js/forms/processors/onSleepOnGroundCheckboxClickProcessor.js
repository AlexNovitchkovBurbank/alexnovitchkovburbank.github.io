import numPeopleFieldContainerForSleepOnGroundCheckboxCreator from "../../form/Creators/numPeopleFieldContainerForSleepOnGroundCheckboxCreator.js";
import numNightsFieldContainerForSleepOnGroundCheckboxCreator from "../../form/Creators/numNightsFieldContainerForSleepOnGroundCheckboxCreator.js";
import sleepOnGroundCheckboxFieldsRemover from "../Removers/sleepOnGroundCheckboxFieldsRemover.js";

const onSleepOnGroundCheckboxClickProcessor = {
  Process() {
    const sleepOnGroundCheckboxContainer = document.querySelector(
      "#sleep-on-ground-checkbox"
    );

    try {
      if (sleepOnGroundCheckboxContainer.checked) {
        const numPeopleSleepOnGroundFieldContainer = numPeopleFieldContainerForSleepOnGroundCheckboxCreator.Create();
        const numNightsSleepOnGroundFieldContainer = numNightsFieldContainerForSleepOnGroundCheckboxCreator.Create();

        const sleepOnGroundCheckboxContainer = document.querySelector(
          "#sleep-on-ground-checkbox-container"
        );

        sleepOnGroundCheckboxContainer.appendChild(
          numPeopleSleepOnGroundFieldContainer
        );
        sleepOnGroundCheckboxContainer.appendChild(
          numNightsSleepOnGroundFieldContainer
        );
      } else sleepOnGroundCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onSleepOnGroundCheckboxClickProcessor;
