import NumTentsFieldContainerForSleepIntentCheckboxCreator from "../Creators/NumTentsFieldContainerForSleepInTentCheckboxCreator.js";
import StayInTentNumberOfPeopleRemover from "../Removers/StayInTentNumPeopleRemover.js";

const OnTentCheckboxClickProcessor = {
  Process() {
    const stayInTentCheckboxContainer = document.querySelector(
      "#stay-in-tent-checkbox"
    );

    try {
      if (stayInTentCheckboxContainer.checked) {
        const numTentsFieldContainer = NumTentsFieldContainerForSleepIntentCheckboxCreator.Create();

        const stayInTentCheckboxContainer = document.querySelector(
          "#stay-in-tent-checkbox-container"
        );
        stayInTentCheckboxContainer.appendChild(
          numTentsFieldContainer
        );
      } else StayInTentNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnTentCheckboxClickProcessor;
