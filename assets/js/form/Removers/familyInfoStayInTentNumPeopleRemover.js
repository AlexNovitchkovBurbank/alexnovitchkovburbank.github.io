const stayInTentNumberOfPeopleRemover = {
    Remove() {
      const stayInTentContainer = document.querySelector("#stay-in-tent-container");
      const numberOfPeopleElement = stayInTentContainer.querySelector(".form-field-container");
  
      if (stayInTentContainer !== null && numberOfPeopleElement !== null) stayInTentContainer.removeChild(numberOfPeopleElement);
    }
  }

  export default stayInTentNumberOfPeopleRemover;