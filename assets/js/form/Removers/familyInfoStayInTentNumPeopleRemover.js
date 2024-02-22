const stayInTentNumberOfPeopleRemover = {
    Remove() {
      const stayInTentContainer = document.querySelector("#stay-in-tent-container");
      const numberOfPeopleContainer = stayInTentContainer.querySelector(".field");
  
      if (stayInTentContainer !== null && numberOfPeopleContainer !== null) stayInTentContainer.removeChild(numberOfPeopleContainer);
    }
  }

  export default stayInTentNumberOfPeopleRemover;