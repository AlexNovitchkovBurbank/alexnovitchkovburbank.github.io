const dayUseOnlyNumberOfPeopleRemover = {
    Remove() {
      const stayInRvContainer = document.querySelector("#day-use-only-container");
      const numberOfPeopleElement = stayInRvContainer.querySelector(".form-field-container");
  
      if (stayInRvContainer !== null && numberOfPeopleElement !== null) stayInRvContainer.removeChild(numberOfPeopleElement);
    }
  }

  export default dayUseOnlyNumberOfPeopleRemover;