import DisplayFamilyMemberRecordsProcessor from "./Processors/familyMemberRecordsProcessor.js";
import DisplayFamilyInfoProcessor from "./Processors/familyInfoProcessor.js";
import NumPeopleInputProcessor from "./Processors/NumPeopleInputProcessor.js";
import onChaletCheckboxClickProcessor from "./Processors/onChaletCheckboxClickProcessor.js";
import onRvCheckboxClickProcessor from "./Processors/onRvCheckboxClickProcessor.js";
import onTentCheckboxClickProcessor from "./Processors/onTentCheckboxClickProcessor.js";
import onSleepOnGroundCheckboxClickProcessor from "./Processors/onSleepOnGroundCheckboxClickProcessor.js";
import onStayOvernightCheckboxClickProcessor from "./Processors/onOvernightCheckboxClickProcessor.js";
import onDayUseOnlyCheckboxClickProcessor from "./Processors/onDayUseOnlyCheckboxClickProcessor.js";
import resetProcessor from "./Processors/resetProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  DisplayFamilyInfoProcessor.Process();

  const numPeopleContainer = document.querySelector("#num-people-container");
  if (numPeopleContainer !== null) {
    const numPeopleInput =
      numPeopleContainer.querySelector("#num-people-input");
    if (numPeopleInput !== null) {
      numPeopleInput.addEventListener("keyup", () => {
        try {
          DisplayFamilyMemberRecordsProcessor.Process(numPeopleInput.value);
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
      onChaletCheckboxClickProcessor.Process();
    });
  }

  const stayInRvCheckboxContainer = document.querySelector(
    "#stay-in-rv-checkbox"
  );
  if (stayInRvCheckboxContainer !== null) {
    stayInRvCheckboxContainer.addEventListener("change", () => {
      onRvCheckboxClickProcessor.Process();
    });
  }

  const stayInTentCheckboxContainer = document.querySelector(
    "#stay-in-tent-checkbox"
  );
  if (stayInTentCheckboxContainer !== null) {
    stayInTentCheckboxContainer.addEventListener("change", () => {
      onTentCheckboxClickProcessor.Process();
    });
  }

  const sleepOnGroundCheckboxContainer = document.querySelector(
    "#sleep-on-ground-checkbox"
  );
  if (sleepOnGroundCheckboxContainer !== null) {
    sleepOnGroundCheckboxContainer.addEventListener("change", () => {
      onSleepOnGroundCheckboxClickProcessor.Process();
    });
  }

  const stayOvernightCheckboxContainer = document.querySelector(
    "#stay-overnight-checkbox"
  );
  if (stayOvernightCheckboxContainer !== null) {
    stayOvernightCheckboxContainer.addEventListener("change", () => {
      onStayOvernightCheckboxClickProcessor.Process();
    });
  }

  const dayUseOnlyCheckboxContainer = document.querySelector(
    "#day-use-only-checkbox"
  );
  if (dayUseOnlyCheckboxContainer !== null) {
    dayUseOnlyCheckboxContainer.addEventListener("change", () => {
      onDayUseOnlyCheckboxClickProcessor.Process();
    });
  }

  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    resetProcessor.Process();
  });
});
