import OnDayUseOnlyCheckboxClickProcessor from "./Processors/OnDayUseOnlyCheckboxClickProcessor.js";
import CalculatePriceForDayUseOnlyProcessor from "./Processors/CalculatePriceForDayUseOnlyProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  const dayUseOnlyCheckboxField = document.querySelector(
    "#day-use-only-checkbox"
  );
  if (dayUseOnlyCheckboxField !== null) {
    dayUseOnlyCheckboxField.addEventListener("change", () => {
      OnDayUseOnlyCheckboxClickProcessor.Process();

      const dayUseOnlyCheckbox = document.querySelector(
        "#day-use-only-checkbox"
      );

      const dayUseOnlyNumPeopleField = dayUseOnlyCheckbox.querySelector(
        "#num-people-field-container-for-day-use-only-checkbox"
      );
      const dayUseOnlyNumDaysField = dayUseOnlyCheckbox.querySelector(
        "#num-days-field-container-for-day-use-only-checkbox"
      );

      if (
        dayUseOnlyNumDaysField !== null &&
        dayUseOnlyNumPeopleField !== null
      ) {
        const dayUseOnlyCheckboxNumPeopleInput = document.querySelector(
          "#num-people-input-for-day-use-only-checkbox"
        );
        if (dayUseOnlyCheckboxNumPeopleInput !== null) {
          dayUseOnlyCheckboxNumPeopleInput.addEventListener("keyup", () => {
            const dayUseOnlyCheckboxNumDaysInput = document.querySelector(
              "#num-days-input-for-day-use-only-checkbox"
            );
            if (dayUseOnlyCheckboxNumDaysInput !== null) {
              if (dayUseOnlyCheckboxNumDaysInput.textContent !== NaN)
                CalculatePriceForDayUseOnlyProcessor.Process();
            }
          });
        }

        const dayUseOnlyCheckboxNumDaysInput = document.querySelector(
          "#num-days-input-for-day-use-only-checkbox"
        );
        if (dayUseOnlyCheckboxNumDaysInput !== null) {
          dayUseOnlyCheckboxNumDaysInput.addEventListener("keyup", () => {
            const dayUseOnlyCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-day-use-only-checkbox"
            );
            if (dayUseOnlyCheckboxNumPeopleInput !== null) {
              if (dayUseOnlyCheckboxNumPeopleInput.textContent !== NaN)
                CalculatePriceForDayUseOnlyProcessor.Process();
            }
          });
        }
      }
    });
  }
});
