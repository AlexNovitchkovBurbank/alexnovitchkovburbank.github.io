const StayInChaletNumberOfPeopleRemover = {
  Remove() {
    const stayInChaletContainer = document.querySelector(
      "#stay-in-chalet-container"
    );

    if (stayInChaletContainer !== null) {
      const numberOfPeopleContainer =
        stayInChaletContainer.querySelector(".field");

      if (numberOfPeopleContainer !== null)
        stayInChaletContainer.removeChild(numberOfPeopleContainer);
    }
  },
};

export default StayInChaletNumberOfPeopleRemover;
