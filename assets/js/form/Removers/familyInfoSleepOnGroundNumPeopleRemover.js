const SleepOnGroundNumberOfPeopleRemover = {
    Remove() {
      const sleepOnGroundContainer = document.querySelector("#sleep-on-ground-container");
      const numberOfPeopleContainer = sleepOnGroundContainer.querySelector(".field");
  
      if (sleepOnGroundContainer !== null && numberOfPeopleContainer !== null) sleepOnGroundContainer.removeChild(numberOfPeopleContainer);
    }
  }

  export default SleepOnGroundNumberOfPeopleRemover;