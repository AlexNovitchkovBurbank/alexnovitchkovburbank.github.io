import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import dayUseOnlyNumberOfPeopleRemover from "../Removers/familyInfoDayUseOnlyNumPeopleRemover.js";

const onDayUseOnlyCheckboxClickProcessor = {
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

        const dayUseOnlyContainer = document.querySelector(
          "#day-use-only-container"
        );
        dayUseOnlyContainer.appendChild(
          formFieldNumPeopleContainer
        );
      } else dayUseOnlyNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onDayUseOnlyCheckboxClickProcessor;
