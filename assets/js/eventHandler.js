import DisplayNumberOfEntriesProcessor from "./displayNumPeopleRecords.js";

document.addEventListener("DOMContentLoaded", () => {
  const numPeopleInput = document.querySelector("#num-people");

  if (numPeopleInput !== null) {
    numPeopleInput.addEventListener("keypress", () => {
      try {
        const inputElement = document.querySelector("input#num-people");
        DisplayNumberOfEntriesProcessor.Process(inputElement.nodeValue);
      }
      catch (error) {
        alert(error.message);
      }
    });
  }
});
