const stayInChaletNumberOfPeopleRemover = {
    Remove() {
      const stayInChaletContainer = document.querySelector("#stay-in-chalet-container");
      const numberOfPeopleElement = stayInChaletContainer.querySelector(".form-field-flex-container-large-screen-width");
  
      console.log(stayInChaletContainer.childNodes);
      if (stayInChaletContainer !== null && numberOfPeopleElement !== null) stayInChaletContainer.removeChild(numberOfPeopleElement);
    }
  }

  export default stayInChaletNumberOfPeopleRemover;