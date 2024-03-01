import NumDaysFieldContainerForDayUseOnlyCheckboxCreator from '../Creators/NumDaysFieldContainerForDayUseOnlyCheckboxCreator.js';
import NumPeopleFieldContainerForDayUseOnlyCheckboxCreator from '../Creators/NumPeopleFieldContainerForDayUseOnlyCheckboxCreator.js';
import DayUseOnlyNumberOfPeopleRemover from '../Removers/DayUseOnlyNumPeopleRemover.js';

const OnDayUseOnlyCheckboxClickProcessor = {
  Process() {
    const dayUseOnlyCheckboxContainer = document.querySelector(
      '#day-use-only-checkbox'
    );

    try {
      if (dayUseOnlyCheckboxContainer.checked) {
        const numPeopleFieldContainer =
          NumPeopleFieldContainerForDayUseOnlyCheckboxCreator.Create();

        const numDaysFieldContainer =
          NumDaysFieldContainerForDayUseOnlyCheckboxCreator.Create();

        const dayUseOnlyCheckboxContainer = document.querySelector(
          '#day-use-only-checkbox-container'
        );
        dayUseOnlyCheckboxContainer.appendChild(numPeopleFieldContainer);
        dayUseOnlyCheckboxContainer.appendChild(numDaysFieldContainer);

      } else DayUseOnlyNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnDayUseOnlyCheckboxClickProcessor;
