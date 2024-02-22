const dayUseOnlyNumberOfPeopleRemover = {
    Remove() {
      const stayInRvContainer = document.querySelector("#day-use-only-container");
      const numberOfPeopleContainer = stayInRvContainer.querySelector(".field");
  
      if (stayInRvContainer !== null && numberOfPeopleContainer !== null) stayInRvContainer.removeChild(numberOfPeopleContainer);
    }
  }

  export default dayUseOnlyNumberOfPeopleRemover;