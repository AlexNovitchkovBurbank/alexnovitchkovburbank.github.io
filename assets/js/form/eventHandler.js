import DisplayFamilyMemberRecordsProcessor from "./Processors/familyMemberRecordsProcessor.js";
import DisplayFamilyInfoProcessor from "./Processors/familyInfoProcessor.js";
import onChaletCheckboxClickProcessor from "./Processors/onChaletCheckboxClickProcessor.js";
import onRvCheckboxClickProcessor from "./Processors/onRvCheckboxClickProcessor.js";
import onTentCheckboxClickProcessor from "./Processors/onTentCheckboxClickProcessor.js";
import onSleepOnGroundCheckboxClickProcessor from "./Processors/onSleepOnGroundCheckboxClickProcessor.js";
import onStayOvernightCheckboxClickProcessor from "./Processors/onOvernightCheckboxClickProcessor.js";
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
        } catch (error) {
          alert(error.message);
        }
      });
    }
  }

  const stayInChaletCheckboxElement = document.querySelector(
    "#stay-in-chalet-checkbox"
  );
  if (stayInChaletCheckboxElement !== null) {
    stayInChaletCheckboxElement.addEventListener("change", () => {
      onChaletCheckboxClickProcessor.Process();
    });
  }

  const stayInRvCheckboxElement = document.querySelector(
    "#stay-in-rv-checkbox"
  );
  if (stayInRvCheckboxElement !== null) {
    stayInRvCheckboxElement.addEventListener("change", () => {
      onRvCheckboxClickProcessor.Process();
    });
  }

  const stayInTentCheckboxElement = document.querySelector(
    "#stay-in-tent-checkbox"
  );
  if (stayInTentCheckboxElement !== null) {
    stayInTentCheckboxElement.addEventListener("change", () => {
      onTentCheckboxClickProcessor.Process();
    });
  }

  const sleepOnGroundCheckboxElement = document.querySelector(
    "#sleep-on-ground-checkbox"
  );
  if (sleepOnGroundCheckboxElement !== null) {
    sleepOnGroundCheckboxElement.addEventListener("change", () => {
      onSleepOnGroundCheckboxClickProcessor.Process();
    });
  }

  const stayOvernightCheckboxElement = document.querySelector(
    "#stay-overnight-checkbox"
  );
  if (stayOvernightCheckboxElement !== null) {
    stayOvernightCheckboxElement.addEventListener("change", () => {
      onStayOvernightCheckboxClickProcessor.Process();
    });
  }

  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    resetProcessor.Process();
  });
});
