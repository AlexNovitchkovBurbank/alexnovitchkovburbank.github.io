const SleepOnGroundNumberOfPeopleRemover = {
  Remove() {
    const sleepOnGroundContainer = document.querySelector(
      "#sleep-on-ground-container"
    );
    if (sleepOnGroundContainer !== null) {
      const numberOfPeopleContainer =
        sleepOnGroundContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        sleepOnGroundContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default SleepOnGroundNumberOfPeopleRemover;
