const stayOvernightNumberOfPeopleRemover = {
    Remove() {
      const stayInRvContainer = document.querySelector("#stay-in-rv-container");
      const numberOfPeopleElement = stayInRvContainer.querySelector(".form-field-container");
  
      if (stayInRvContainer !== null && numberOfPeopleElement !== null) stayInRvContainer.removeChild(numberOfPeopleElement);
    }
  }

  export default stayOvernightNumberOfPeopleRemover;