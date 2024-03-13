import NumBedsFieldContainerForChaletCheckboxCreator from "../Creators/NumBedsFieldContainerForChaletCheckboxCreator.js";
import StayInChaletNumberOfPeopleRemover from "../Removers/StayInChaletNumPeopleRemover.js";

const OnChaletCheckboxClickProcessor = {
  Process() {
    const stayInChaletCheckboxContainer = document.querySelector(
      "#chalet-checkbox"
    );

    try {
      if (stayInChaletCheckboxContainer.checked) {
        const numBedsFieldContainer = NumBedsFieldContainerForChaletCheckboxCreator.Create();
        const stayInChaletCheckboxContainer = document.querySelector(
          "#chalet-checkbox-container"
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
