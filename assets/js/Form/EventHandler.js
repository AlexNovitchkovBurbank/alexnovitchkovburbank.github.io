import FamilyMemberRecordsProcessor from "./Processors/FamilyMemberRecordsProcessor.js";
import FamilyInfoProcessor from "./Processors/FamilyInfoProcessor.js";
import OnChaletCheckboxClickProcessor from "./Processors/OnChaletCheckboxClickProcessor.js";
import OnRvCheckboxClickProcessor from "./Processors/OnRvCheckboxClickProcessor.js";
import OnTentCheckboxClickProcessor from "./Processors/OnTentCheckboxClickProcessor.js";
import OnSleepOnGroundCheckboxClickProcessor from "./Processors/OnSleepOnGroundCheckboxClickProcessor.js";
import OnStayOvernightCheckboxClickProcessor from "./Processors/onOvernightCheckboxClickProcessor.js";
import ResetProcessor from "./Processors/ResetProcessor.js";
import OnDayUseOnlyCheckboxClickProcessor from "./Processors/OnDayUseOnlyCheckboxClickProcessor.js";
import CalculatePriceForDayUseOnlyProcessor from "./Processors/CalculatePriceForDayUseOnlyProcessor.js";
import StringToIntConverter from "./Converters/StringToIntConverter.js";

document.addEventListener("DOMContentLoaded", () => {
  FamilyInfoProcessor.Process();

  const numPeopleFieldContainer = document.querySelector(
    "#num-people-field-container"
  );
  if (numPeopleFieldContainer !== null) {
    const numPeopleInput =
      numPeopleFieldContainer.querySelector("#num-people-input");
    if (numPeopleInput !== null) {
      numPeopleInput.addEventListener("keyup", () => {
        try {
          FamilyMemberRecordsProcessor.Process(numPeopleInput.value);
        } catch (error) {
          alert(error.message);
        }
      });
    }
  }

  const stayInChaletCheckboxField = document.querySelector(
    "#stay-in-chalet-checkbox"
  );
  if (stayInChaletCheckboxField !== null) {
    stayInChaletCheckboxField.addEventListener("change", () => {
      OnChaletCheckboxClickProcessor.Process();
    });
  }

  const stayInRvCheckboxField = document.querySelector("#stay-in-rv-checkbox");
  if (stayInRvCheckboxField !== null) {
    stayInRvCheckboxField.addEventListener("change", () => {
      OnRvCheckboxClickProcessor.Process();
    });
  }

  const stayInTentCheckboxField = document.querySelector(
    "#stay-in-tent-checkbox"
  );
  if (stayInTentCheckboxField !== null) {
    stayInTentCheckboxField.addEventListener("change", () => {
      OnTentCheckboxClickProcessor.Process();
    });
  }

  const sleepOnGroundCheckboxField = document.querySelector(
    "#sleep-on-ground-checkbox"
  );
  if (sleepOnGroundCheckboxField !== null) {
    sleepOnGroundCheckboxField.addEventListener("change", () => {
      OnSleepOnGroundCheckboxClickProcessor.Process();
    });
  }

  const stayOvernightCheckboxField = document.querySelector(
    "#stay-overnight-checkbox"
  );
  if (stayOvernightCheckboxField !== null) {
    stayOvernightCheckboxField.addEventListener("change", () => {
      OnStayOvernightCheckboxClickProcessor.Process();
    });
  }

  daysOnlyCheckboxHandler();

  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    ResetProcessor.Process();
  });
});

function daysOnlyCheckboxHandler() {
  const dayUseOnlyCheckbox = document.querySelector(
    "#day-use-only-checkbox"
  );
  if (dayUseOnlyCheckbox !== null) {
    dayUseOnlyCheckbox.addEventListener("change", () => {
      OnDayUseOnlyCheckboxClickProcessor.Process();

      const dayUseOnlyNumPeopleFieldContainer = document.querySelector(
        "#num-people-field-container-for-day-use-only-checkbox"
      );
      const dayUseOnlyNumDaysFieldContainer = document.querySelector(
        "#num-days-field-container-for-day-use-only-checkbox"
      );

      if (
        dayUseOnlyNumDaysFieldContainer !== null &&
        dayUseOnlyNumPeopleFieldContainer !== null
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
              const dayUseOnlyCheckboxNumDaysInputText = StringToIntConverter.Convert(dayUseOnlyCheckboxNumDaysInput.value);
              if (!isNaN(dayUseOnlyCheckboxNumDaysInputText))
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
              const dayUseOnlyCheckboxNumPeopleInputText = StringToIntConverter.Convert(dayUseOnlyCheckboxNumPeopleInput.value);
              if (!isNaN(dayUseOnlyCheckboxNumPeopleInputText))
                CalculatePriceForDayUseOnlyProcessor.Process();
            }
          });
        }
      }
    });
  }
}