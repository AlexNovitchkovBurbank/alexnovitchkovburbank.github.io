import {
  DisplayNumberOfEntriesProcessor,
  DisplayFamilyInfoProcessor,
} from "./displayNumPeopleRecords.js";

document.addEventListener("DOMContentLoaded", () => {
  DisplayFamilyInfoProcessor.Process();

  const stayInChaletCheckboxElement = document.querySelector(
    "#stay-in-chalet-checkbox"
  );
  if (stayInChaletCheckboxElement !== null) {
    stayInChaletCheckboxElement.addEventListener("change", () => {
      try {
        if (stayInChaletCheckboxElement.checked)
          console.log("checked: ", stayInChaletCheckboxElement.value);
      } catch (error) {
        alert(error.message);
      }
    });
  }

  const stayInRvCheckboxElement = document.querySelector(
    "#stay-in-rv-checkbox"
  );
  if (stayInRvCheckboxElement !== null) {
    stayInRvCheckboxElement.addEventListener("change", () => {
      try {
        if (stayInRvCheckboxElement.checked)
          console.log("checked: ", stayInRvCheckboxElement.value);
      } catch (error) {
        alert(error.message);
      }
    });
  }

  const stayInTentsCheckboxElement = document.querySelector(
    "#stay-in-tents-checkbox"
  );
  if (stayInTentsCheckboxElement !== null) {
    stayInTentsCheckboxElement.addEventListener("change", () => {
      try {
        if (stayInTentsCheckboxElement.checked)
          console.log("checked: ", stayInTentsCheckboxElement.value);
      } catch (error) {
        alert(error.message);
      }
    });
  }

  const sleepOnGroundCheckboxElement = document.querySelector(
    "#sleep-on-ground-checkbox"
  );
  if (sleepOnGroundCheckboxElement !== null) {
    sleepOnGroundCheckboxElement.addEventListener("change", () => {
      try {
        if (sleepOnGroundCheckboxElement.checked)
          console.log("checked: ", sleepOnGroundCheckboxElement.value);
      } catch (error) {
        alert(error.message);
      }
    });
  }

  const numPeopleInputElement = document.querySelector("#num-people");
  if (numPeopleInputElement !== null) {
    numPeopleInputElement.addEventListener("keyup", () => {
      try {
        DisplayNumberOfEntriesProcessor.Process(numPeopleInputElement.value);
      } catch (error) {
        alert(error.message);
      }
    });
  }
});
