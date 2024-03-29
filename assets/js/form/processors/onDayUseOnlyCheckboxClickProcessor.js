import numDaysFieldContainerForDayUseOnlyCheckboxCreator from "../../form/creators/numDaysFieldContainerForDayUseOnlyCheckboxCreator.js";
import numPeopleFieldContainerForDayUseOnlyCheckboxCreator from "../../form/creators/numPeopleFieldContainerForDayUseOnlyCheckboxCreator.js";
import dayUseOnlyCheckboxFieldsRemover from "../removers/dayUseOnlyCheckboxFieldsRemover.js";

const onDayUseOnlyCheckboxClickProcessor = {
  Process() {
    const dayUseOnlyCheckboxContainer = document.querySelector(
      "#day-use-only-checkbox"
    );

    try {
      if (dayUseOnlyCheckboxContainer.checked) {
        const numPeopleFieldContainer =
          numPeopleFieldContainerForDayUseOnlyCheckboxCreator.Create();
        const numDaysFieldContainer =
          numDaysFieldContainerForDayUseOnlyCheckboxCreator.Create();

        const dayUseOnlyCheckboxContainer = document.querySelector(
          "#day-use-only-checkbox-container"
        );

        dayUseOnlyCheckboxContainer.appendChild(numPeopleFieldContainer);
        dayUseOnlyCheckboxContainer.appendChild(numDaysFieldContainer);
      } else dayUseOnlyCheckboxFieldsRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onDayUseOnlyCheckboxClickProcessor;
