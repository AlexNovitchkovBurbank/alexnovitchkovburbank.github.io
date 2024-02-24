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
        const numPeopleFieldContainerContainer =
          NumPeopleFieldContainerForDayUseOnlyCheckboxCreator.Create();

        const numDaysFieldContainer =
          NumDaysFieldContainerForDayUseOnlyCheckboxCreator.Create();

        const dayUseOnlyCheckboxContainer = document.querySelector(
          '#day-use-only-checkbox-container'
        );
        dayUseOnlyCheckboxContainer.appendChild(numPeopleFieldContainerContainer);
        dayUseOnlyCheckboxContainer.appendChild(numDaysFieldContainer);
      } else DayUseOnlyNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default OnDayUseOnlyCheckboxClickProcessor;
