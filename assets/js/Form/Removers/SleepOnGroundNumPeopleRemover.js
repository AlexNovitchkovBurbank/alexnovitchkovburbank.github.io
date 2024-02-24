const SleepOnGroundNumberOfPeopleRemover = {
  Remove() {
    const sleepOnGroundCheckboxContainer = document.querySelector(
      "#sleep-on-ground-checkbox-container"
    );
    if (sleepOnGroundCheckboxContainer !== null) {
      const numberOfPeopleContainer =
        sleepOnGroundCheckboxContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        sleepOnGroundCheckboxContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default SleepOnGroundNumberOfPeopleRemover;
