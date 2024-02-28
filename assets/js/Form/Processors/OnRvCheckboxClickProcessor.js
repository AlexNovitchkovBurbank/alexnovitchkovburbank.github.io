import NumRvsFieldContainerForSleepInRvCheckboxCreator from "../Creators/NumRvsFieldContainerForSleepInRvCheckboxCreator.js";
import StayInRvNumberOfPeopleRemover from "../Removers/StayInRvNumPeopleRemover.js";

const OnRvCheckboxClickProcessor = {
  Process() {
    const stayInRvCheckboxContainer = document.querySelector(
      "#stay-in-rv-checkbox"
    );

    try {
      if (stayInRvCheckboxContainer.checked) {
        const numRvsFieldContainer = NumRvsFieldContainerForSleepInRvCheckboxCreator.Create();

        const stayInRvCheckboxContainer = document.querySelector(
          "#stay-in-rv-checkbox-container"
        );
        stayInRvCheckboxContainer.appendChild(numRvsFieldContainer);
      } else StayInRvNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnRvCheckboxClickProcessor;
