const stayOvernightNumberOfPeopleRemover = {
    Remove() {
      const stayInRvContainer = document.querySelector("#stay-overnight-container");
      const numberOfPeopleElement = stayInRvContainer.querySelector(".form-field-container");
  
      if (stayInRvContainer !== null && numberOfPeopleElement !== null) stayInRvContainer.removeChild(numberOfPeopleElement);
    }
  }

  export default stayOvernightNumberOfPeopleRemover;