import NumPeopleContainerCreator from "../Creators/NumPeopleContainerCreator.js";
import stayInRvNumberOfPeopleRemover from "../Removers/familyInfoStayInRvNumPeopleRemover.js";

const onRvCheckboxClickProcessor = {
  Process() {
    const stayInRvCheckboxElement = document.querySelector(
      "#stay-in-rv-checkbox"
    );

    try {
      if (stayInRvCheckboxElement.checked) {
        const numPeopleInputName = "number-of-people-in-rv";
        const numPeopleInputId = "num-people-in-rv";

        const formFieldNumPeopleContainerElement =
          NumPeopleContainerCreator.Create(numPeopleInputId, numPeopleInputName);

        const stayInRvContainer = document.querySelector(
          "#stay-in-rv-container"
        );
        stayInRvContainer.appendChild(formFieldNumPeopleContainerElement);
      } else stayInRvNumberOfPeopleRemover.Remove();
    } catch (error) {
      alert(error.message);
    }
  },
};

export default onRvCheckboxClickProcessor;
