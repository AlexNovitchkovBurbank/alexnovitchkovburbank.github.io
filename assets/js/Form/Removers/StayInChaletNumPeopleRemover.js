const StayInChaletNumberOfPeopleRemover = {
  Remove() {
    const stayInChaletCheckboxContainer = document.querySelector(
      "#chalet-checkbox-container"
    );

    if (stayInChaletCheckboxContainer !== null) {
      const numberOfPeopleContainer =
        stayInChaletCheckboxContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        stayInChaletCheckboxContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default StayInChaletNumberOfPeopleRemover;
