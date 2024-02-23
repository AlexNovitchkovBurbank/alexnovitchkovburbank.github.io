const StayInRvNumberOfPeopleRemover = {
  Remove() {
    const stayInRvContainer = document.querySelector("#stay-in-rv-container");
    if (stayInRvContainer !== null) {
      const numberOfPeopleContainer = stayInRvContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        stayInRvContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default StayInRvNumberOfPeopleRemover;
