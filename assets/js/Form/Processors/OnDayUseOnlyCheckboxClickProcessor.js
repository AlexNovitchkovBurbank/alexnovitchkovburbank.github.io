import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import DayUseOnlyNumberOfPeopleRemover from "../Removers/DayUseOnlyNumPeopleRemover.js";

const OnDayUseOnlyCheckboxClickProcessor = {
  Process() {
    const dayUseOnlyCheckboxContainer = document.querySelector(
      "#day-use-only-checkbox"
    );

    try {
      if (dayUseOnlyCheckboxContainer.checked) {
        const numPeopleInputName = "number-of-people-for-day-use-only";
        const numPeopleInputId = "num-people-stay-for-day-use";

        const formFieldNumPeopleContainer =
        NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const numNightsInputName = "number-of-nights";
        const numNightsInputId = "num-nights";

        const formFieldNumNightsContainer =
        NumDayOnlyDaysContainerCreator.Create(numNightsInputId, numNightsInputName);

        const dayUseOnlyContainer = document.querySelector(
          "#day-use-only-container"
        );
        dayUseOnlyContainer.appendChild(
          formFieldNumPeopleContainer
        );
      } else DayUseOnlyNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnDayUseOnlyCheckboxClickProcessor;
