const StayInTentNumberOfPeopleRemover = {
  Remove() {
    const stayInTentCheckboxContainer = document.querySelector(
      "#stay-in-tent-checkbox-container"
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
