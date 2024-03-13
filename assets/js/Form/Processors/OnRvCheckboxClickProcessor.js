import NumRvsFieldContainerForRvCheckboxCreator from "../Creators/NumRvsFieldContainerForRvCheckboxCreator.js";
import StayInRvNumberOfPeopleRemover from "../Removers/StayInRvNumPeopleRemover.js";

const OnRvCheckboxClickProcessor = {
  Process() {
    const stayInRvCheckboxContainer = document.querySelector(
      "#stay-in-rv-checkbox"
    );

    try {
      if (stayInRvCheckboxContainer.checked) {
        const numRvsFieldContainer = NumRvsFieldContainerForRvCheckboxCreator.Create();

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
