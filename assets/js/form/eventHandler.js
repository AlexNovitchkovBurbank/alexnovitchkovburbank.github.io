import DisplayFamilyMemberRecordsProcessor from "./Processors/familyMemberRecordsProcessor.js";
import DisplayFamilyInfoProcessor from "./Processors/familyInfoProcessor.js";
import CreateNumPeopleContainerCreator from "./Creators/NumPeopleContainerCreator.js";
import stayInChaletNumberOfPeopleRemover from "./Removers/familyInfoStayInChaletNumPeopleRemover.js";
import stayInRvNumberOfPeopleRemover from "./Removers/familyInfoStayInRvNumPeopleRemover.js";
import stayInTentsNumberOfPeopleRemover from "./Removers/familyInfoStayInTentsNumPeopleRemover.js";
import sleepOnGroundNumberOfPeopleRemover from "./Removers/familyInfoSleepOnGroundNumPeopleRemover.js";
import resetProcessor from "./Processors/resetProcessor.js";

document.addEventListener("DOMContentLoaded", () => {
  DisplayFamilyInfoProcessor.Process();

  const stayInChaletCheckboxElement = document.querySelector(
    "#stay-in-chalet-checkbox"
  );
  if (stayInChaletCheckboxElement !== null) {
    stayInChaletCheckboxElement.addEventListener("change", () => {
      try {
        if (stayInChaletCheckboxElement.checked) {
          const formFieldFlexNumPeopleContainerElement =
            CreateNumPeopleContainerCreator.Create();

          const stayInChaletContainer = document.querySelector(
            "#stay-in-chalet-container"
          );
          stayInChaletContainer.appendChild(formFieldFlexNumPeopleContainerElement);
        } else stayInChaletNumberOfPeopleRemover.Remove();
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
        if (stayInRvCheckboxElement.checked) {
          const formFieldFlexNumPeopleContainerElement =
            CreateNumPeopleContainerCreator.Create();

          const stayInRvContainer = document.querySelector(
            "#stay-in-rv-container"
          );
          stayInRvContainer.appendChild(formFieldFlexNumPeopleContainerElement);
        } else stayInRvNumberOfPeopleRemover.Remove();
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
        if (stayInTentsCheckboxElement.checked) {
          const formFieldFlexNumPeopleContainerElement =
            CreateNumPeopleContainerCreator.Create();

          const stayInTentsContainer = document.querySelector(
            "#stay-in-tents-container"
          );
          stayInTentsContainer.appendChild(formFieldFlexNumPeopleContainerElement);
        } else {
          stayInTentsNumberOfPeopleRemover.Remove();
        }
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
        if (sleepOnGroundCheckboxElement.checked) {
          const formFieldFlexNumPeopleContainerElement =
            CreateNumPeopleContainerCreator.Create();

          const sleepOnGroundContainer = document.querySelector(
            "#sleep-on-ground-container"
          );
          sleepOnGroundContainer.appendChild(formFieldFlexNumPeopleContainerElement);
        } else sleepOnGroundNumberOfPeopleRemover.Remove();
      } catch (error) {
        alert(error.message);
      }
    });
  }

  const numPeopleContainer = document.querySelector("#num-people-container");
  if (numPeopleContainer !== null) {
    const numPeopleInput = numPeopleContainer.querySelector("#num-people-input");
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

  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener('click', () => {
    resetProcessor.Process();
  })
});