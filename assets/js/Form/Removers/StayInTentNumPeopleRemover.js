const StayInTentNumberOfPeopleRemover = {
  Remove() {
    const stayInTentCheckboxContainer = document.querySelector(
      "#tent-checkbox-container"
    );
    if (stayInTentCheckboxContainer !== null) {
      const numberOfPeopleContainer =
        stayInTentCheckboxContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        stayInTentCheckboxContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default StayInTentNumberOfPeopleRemover;
