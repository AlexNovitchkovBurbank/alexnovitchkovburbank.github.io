const StayInTentNumberOfPeopleRemover = {
  Remove() {
    const stayInTentContainer = document.querySelector(
      "#stay-in-tent-container"
    );
    if (stayInTentContainer !== null) {
      const numberOfPeopleContainer =
        stayInTentContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        stayInTentContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default StayInTentNumberOfPeopleRemover;
