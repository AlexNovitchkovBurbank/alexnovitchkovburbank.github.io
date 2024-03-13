import NumTentsFieldContainerForTentCheckboxCreator from "../Creators/NumTentsFieldContainerForTentCheckboxCreator.js";
import StayInTentNumberOfPeopleRemover from "../Removers/StayInTentNumPeopleRemover.js";

const OnTentCheckboxClickProcessor = {
  Process() {
    const stayInTentCheckboxContainer = document.querySelector(
      "#tent-checkbox"
    );

    try {
      if (stayInTentCheckboxContainer.checked) {
        const numTentsFieldContainer = NumTentsFieldContainerForTentCheckboxCreator.Create();

        const stayInTentCheckboxContainer = document.querySelector(
          "#tent-checkbox-container"
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
