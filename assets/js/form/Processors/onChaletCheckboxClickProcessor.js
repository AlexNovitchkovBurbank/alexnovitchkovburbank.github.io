import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import stayInChaletNumberOfPeopleRemover from "../Removers/familyInfoStayInChaletNumPeopleRemover.js";

const onChaletCheckboxClickProcessor = {
  Process() {
    const stayInChaletCheckboxContainer = document.querySelector(
      "#stay-in-chalet-checkbox"
    );

    try {
      if (stayInChaletCheckboxContainer.checked) {
        const numPeopleInputName = "number-of-people-in-chalet";
        const numPeopleInputId = "num-people-in-chalet";
        const formFieldNumPeopleContainer =
        NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const stayInChaletContainer = document.querySelector(
          "#stay-in-chalet-container"
        );
        stayInChaletContainer.appendChild(
          formFieldNumPeopleContainer
        );
      } else stayInChaletNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onChaletCheckboxClickProcessor;
