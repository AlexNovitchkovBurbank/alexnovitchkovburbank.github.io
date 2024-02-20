import CreateNumPeopleContainerCreator from "./Creators/NumPeopleContainerCreator.js";
import stayInChaletNumberOfPeopleRemover from "./Removers/familyInfoStayInChaletNumPeopleRemover.js";

const onChaletCheckboxClickProcessor = {
  Process() {
    const stayInChaletCheckboxElement = document.querySelector(
      "#stay-in-chalet-checkbox"
    );

    try {
      if (stayInChaletCheckboxElement.checked) {
        const formFieldFlexNumPeopleContainerElement =
          CreateNumPeopleContainerCreator.Create();

        const stayInChaletContainer = document.querySelector(
          "#stay-in-chalet-container"
        );
        stayInChaletContainer.appendChild(
          formFieldFlexNumPeopleContainerElement
        );
      } else stayInChaletNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onChaletCheckboxClickProcessor;
