const StayInChaletNumberOfPeopleRemover = {
  Remove() {
    const stayInChaletCheckboxContainer = document.querySelector(
      "#stay-in-chalet-checkbox-container"
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
