import {
  DisplayNumberOfEntriesProcessor,
  DisplayFamilyInfoProcessor,
} from "./displayNumPeopleRecords.js";

document.addEventListener("DOMContentLoaded", () => {
  DisplayFamilyInfoProcessor.Process();

  const numPeopleInput = document.querySelector("#num-people");

  if (numPeopleInput !== null) {
    numPeopleInput.addEventListener("keyup", () => {
      try {
        const inputElement = document.querySelector("input#num-people");
        DisplayNumberOfEntriesProcessor.Process(inputElement.value);
      } catch (error) {
        alert(error.message);
      }
    });
  }
});
