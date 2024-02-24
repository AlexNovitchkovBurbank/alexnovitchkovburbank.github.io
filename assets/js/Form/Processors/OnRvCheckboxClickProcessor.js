import NumRVsFieldContainerForSleepInRVCheckboxCreator from "../Creators/NumRVsFieldContainerForSleepInRVCheckboxCreator.js";
import StayInRvNumberOfPeopleRemover from "../Removers/StayInRvNumPeopleRemover.js";

const OnRvCheckboxClickProcessor = {
  Process() {
    const stayInRvCheckboxContainer = document.querySelector(
      "#stay-in-rv-checkbox"
    );

    try {
      if (stayInRvCheckboxContainer.checked) {
        const numRVsFieldContainer = NumRVsFieldContainerForSleepInRVCheckboxCreator.Create();

        const stayInRvCheckboxContainer = document.querySelector(
          "#stay-in-rv-checkbox-container"
        );
        stayInRvCheckboxContainer.appendChild(numRVsFieldContainer);
      } else StayInRvNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnRvCheckboxClickProcessor;
