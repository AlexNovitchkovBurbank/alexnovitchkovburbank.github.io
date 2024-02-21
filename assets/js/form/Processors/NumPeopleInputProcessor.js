import NumPeopleInputValidator from "../Validators/numPeopleInputValidator.js";
import NumPeopleFieldErrorCreator from "../Creators/NumPeopleFieldErrorCreator.js";
import NumPeopleFieldErrorRemover from "../Removers/NumPeopleFieldErrorRemover.js";

const NumPeopleInputProcessor = {
  Process() {
    const numPeopleContainer = document.querySelector("#num-people-container");
    if (numPeopleContainer !== null) {
      const numPeopleInput =
        numPeopleContainer.querySelector("#num-people-input");

      if (numPeopleInput !== null) {
        const validNum = NumPeopleInputValidator.Validate(
          numPeopleInput.value
        );

        const numPeopleInputId = "num-people-input";

        if (!validNum)
          NumPeopleFieldErrorCreator.Create(numPeopleInputId);
        else
          NumPeopleFieldErrorRemover.Remove(numPeopleInputId);
      }
    }
  },
};

export default NumPeopleInputProcessor;
