const stayInChaletNumberOfPeopleRemover = {
    Remove() {
      const stayInChaletContainer = document.querySelector("#stay-in-chalet-container");
      const numberOfPeopleContainer = stayInChaletContainer.querySelector(".field");
  
      if (stayInChaletContainer !== null && numberOfPeopleContainer !== null) stayInChaletContainer.removeChild(numberOfPeopleContainer);
    }
  }

  export default stayInChaletNumberOfPeopleRemover;