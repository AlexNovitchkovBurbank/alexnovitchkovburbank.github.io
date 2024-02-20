import CreateNumPeopleContainerCreator from "./Creators/NumPeopleContainerCreator.js";
import stayInRvNumberOfPeopleRemover from "./Removers/familyInfoStayInRvNumPeopleRemover.js";

const onRvCheckboxClickProcessor = {
  Process() {
    const stayInRvCheckboxElement = document.querySelector(
      "#stay-in-rv-checkbox"
    );

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
  },
};

export default onRvCheckboxClickProcessor;
