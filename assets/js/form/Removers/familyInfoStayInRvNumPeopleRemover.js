const stayInRvNumberOfPeopleRemover = {
    Remove() {
      const stayInRvContainer = document.querySelector("#stay-in-rv-container");
      const numberOfPeopleContainer = stayInRvContainer.querySelector(".field");
  
      if (stayInRvContainer !== null && numberOfPeopleContainer !== null) stayInRvContainer.removeChild(numberOfPeopleContainer);
    }
  }

  export default stayInRvNumberOfPeopleRemover;