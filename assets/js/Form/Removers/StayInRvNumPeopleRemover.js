const StayInRvNumberOfPeopleRemover = {
  Remove() {
    const stayInRvCheckboxContainer = document.querySelector("#stay-in-rv-checkbox-container");
    if (stayInRvCheckboxContainer !== null) {
      const numberOfPeopleContainer = stayInRvCheckboxContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        stayInRvCheckboxContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default StayInRvNumberOfPeopleRemover;
