const stayInChaletNumberOfPeopleRemover = {
    Remove() {
      const stayInChaletContainer = document.querySelector("#stay-in-chalet-container");
      const numberOfPeopleElement = stayInChaletContainer.querySelector(".form-field-container");
  
      if (stayInChaletContainer !== null && numberOfPeopleElement !== null) stayInChaletContainer.removeChild(numberOfPeopleElement);
    }
  }

  export default stayInChaletNumberOfPeopleRemover;