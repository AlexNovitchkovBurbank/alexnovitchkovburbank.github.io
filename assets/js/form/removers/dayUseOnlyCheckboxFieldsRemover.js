const DayUseOnlyNumberOfPeopleRemover = {
  Remove() {
    const dayUseOnlyCheckboxContainer = document.querySelector("#day-use-only-checkbox-container");
    if (dayUseOnlyCheckboxContainer !== null) {
      const dayUseOnlyFields = dayUseOnlyCheckboxContainer.querySelectorAll(".field-container");

      for (let i = 0; i < dayUseOnlyFields.length; i++) {
          dayUseOnlyCheckboxContainer.removeChild(dayUseOnlyFields[i]);
      }
    }
  },
};

export default DayUseOnlyNumberOfPeopleRemover;
