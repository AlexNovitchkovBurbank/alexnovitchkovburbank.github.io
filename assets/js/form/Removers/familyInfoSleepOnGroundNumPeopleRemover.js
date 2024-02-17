const SleepOnGroundNumberOfPeopleRemover = {
    Remove() {
      const sleepOnGroundContainer = document.querySelector("#sleep-on-ground-container");
      const numberOfPeopleElement = sleepOnGroundContainer.querySelector(".form-field-container");
  
      if (sleepOnGroundContainer !== null && numberOfPeopleElement !== null) sleepOnGroundContainer.removeChild(numberOfPeopleElement);
    }
  }

  export default SleepOnGroundNumberOfPeopleRemover;