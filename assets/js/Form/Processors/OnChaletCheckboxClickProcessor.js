import NumBedsFieldContainerForSleepInChaletCheckboxCreator from "../Creators/NumBedsFieldContainerForSleepInChaletCheckboxCreator.js";
import StayInChaletNumberOfPeopleRemover from "../Removers/StayInChaletNumPeopleRemover.js";

const OnChaletCheckboxClickProcessor = {
  Process() {
    const stayInChaletCheckboxContainer = document.querySelector(
      "#stay-in-chalet-checkbox"
    );

    try {
      if (stayInChaletCheckboxContainer.checked) {
        const numBedsFieldContainer = NumBedsFieldContainerForSleepInChaletCheckboxCreator.Create();
        const stayInChaletCheckboxContainer = document.querySelector(
          "#stay-in-chalet-checkbox-container"
        );
        stayInChaletCheckboxContainer.appendChild(
          numBedsFieldContainer
        );
      } else StayInChaletNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnChaletCheckboxClickProcessor;
