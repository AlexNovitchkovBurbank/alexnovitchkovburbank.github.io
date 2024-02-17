const stayInTentsNumberOfPeopleRemover = {
    Remove() {
      const stayInTentsContainer = document.querySelector("#stay-in-tents-container");
      const numberOfPeopleElement = stayInTentsContainer.querySelector(".form-field-container");
  
      if (stayInTentsContainer !== null && numberOfPeopleElement !== null) stayInTentsContainer.removeChild(numberOfPeopleElement);
    }
  }

  export default stayInTentsNumberOfPeopleRemover;