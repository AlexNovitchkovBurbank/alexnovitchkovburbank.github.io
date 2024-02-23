const DayUseOnlyNumberOfPeopleRemover = {
  Remove() {
    const dayUseOnlyContainer = document.querySelector("#day-use-only-container");
    if (dayUseOnlyContainer !== null) {
      const numberOfPeopleContainer = dayUseOnlyContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        dayUseOnlyContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default DayUseOnlyNumberOfPeopleRemover;
