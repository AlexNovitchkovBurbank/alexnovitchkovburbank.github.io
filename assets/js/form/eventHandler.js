import FamilyMemberRecordsProcessor from "./Processors/FamilyMemberRecordsProcessor.js";
import FamilyInfoProcessor from "./Processors/FamilyInfoProcessor.js";
import NumPeopleInputProcessor from "./Processors/NumPeopleInputProcessor.js";
import OnChaletCheckboxClickProcessor from "./Processors/OnChaletCheckboxClickProcessor.js";
import OnRvCheckboxClickProcessor from "./Processors/OnRvCheckboxClickProcessor.js";
import OnTentCheckboxClickProcessor from "./Processors/OnTentCheckboxClickProcessor.js";
import OnSleepOnGroundCheckboxClickProcessor from "./Processors/OnSleepOnGroundCheckboxClickProcessor.js";
import OnStayOvernightCheckboxClickProcessor from "./Processors/onOvernightCheckboxClickProcessor.js";
import OnDayUseOnlyCheckboxClickProcessor from "./Processors/OnDayUseOnlyCheckboxClickProcessor.js";
import ResetProcessor from "./Processors/ResetProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  FamilyInfoProcessor.Process();

  const numPeopleContainer = document.querySelector("#num-people-container");
  if (numPeopleContainer !== null) {
    const numPeopleInput =
      numPeopleContainer.querySelector("#num-people-input");
    if (numPeopleInput !== null) {
      numPeopleInput.addEventListener("keyup", () => {
        try {
          FamilyMemberRecordsProcessor.Process(numPeopleInput.value);
          NumPeopleInputProcessor.Process();
        } catch (error) {
          alert(error.message);
        }
      });
    }
  }

  const stayInChaletCheckboxContainer = document.querySelector(
    "#stay-in-chalet-checkbox"
  );
  if (stayInChaletCheckboxContainer !== null) {
    stayInChaletCheckboxContainer.addEventListener("change", () => {
      OnChaletCheckboxClickProcessor.Process();
    });
  }

  const stayInRvCheckboxContainer = document.querySelector(
    "#stay-in-rv-checkbox"
  );
  if (stayInRvCheckboxContainer !== null) {
    stayInRvCheckboxContainer.addEventListener("change", () => {
      OnRvCheckboxClickProcessor.Process();
    });
  }

  const stayInTentCheckboxContainer = document.querySelector(
    "#stay-in-tent-checkbox"
  );
  if (stayInTentCheckboxContainer !== null) {
    stayInTentCheckboxContainer.addEventListener("change", () => {
      OnTentCheckboxClickProcessor.Process();
    });
  }

  const sleepOnGroundCheckboxContainer = document.querySelector(
    "#sleep-on-ground-checkbox"
  );
  if (sleepOnGroundCheckboxContainer !== null) {
    sleepOnGroundCheckboxContainer.addEventListener("change", () => {
      OnSleepOnGroundCheckboxClickProcessor.Process();
    });
  }

  const stayOvernightCheckboxContainer = document.querySelector(
    "#stay-overnight-checkbox"
  );
  if (stayOvernightCheckboxContainer !== null) {
    stayOvernightCheckboxContainer.addEventListener("change", () => {
      OnStayOvernightCheckboxClickProcessor.Process();
    });
  }

  const dayUseOnlyCheckboxContainer = document.querySelector(
    "#day-use-only-checkbox"
  );
  if (dayUseOnlyCheckboxContainer !== null) {
    dayUseOnlyCheckboxContainer.addEventListener("change", () => {
      OnDayUseOnlyCheckboxClickProcessor.Process();
    });
  }

  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    ResetProcessor.Process();
  });
});
