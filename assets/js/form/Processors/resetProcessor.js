const resetProcessor = {
  Process() {
    const mainNumPeopleField = document.querySelector("#num-people-input");
    mainNumPeopleField.classList.remove("input-error");

    const familyInfoStayInChaletContainer = document.querySelector("#stay-in-chalet-container");
    if (familyInfoStayInChaletContainer !== null) {
      const familyInfoNumPeopleInChaletContainer = familyInfoStayInChaletContainer.querySelector(".form-field-container");

      if (familyInfoNumPeopleInChaletContainer !== null)
        familyInfoStayInChaletContainer.removeChild(familyInfoNumPeopleInChaletContainer);
    }

    const familyInfoStayInRvContainer = document.querySelector("#stay-in-rv-container");
    if (familyInfoStayInRvContainer !== null) {
      const familyInfoNumPeopleInRvContainer = familyInfoStayInRvContainer.querySelector(".form-field-container");

      if (familyInfoNumPeopleInRvContainer !== null)
        familyInfoStayInRvContainer.removeChild(familyInfoNumPeopleInRvContainer);
    }

    const familyInfoStayInTentsContainer = document.querySelector("#stay-in-tents-container");
    if (familyInfoStayInTentsContainer !== null) {
      const familyInfoNumPeopleInTentsContainer = familyInfoStayInTentsContainer.querySelector(".form-field-container");

      if (familyInfoNumPeopleInTentsContainer !== null)
        familyInfoStayInTentsContainer.removeChild(familyInfoNumPeopleInTentsContainer);
    }

    const familyInfoSleepOnGroundContainer = document.querySelector("#sleep-on-ground-container");
    if (familyInfoSleepOnGroundContainer !== null) {
      const familyInfoNumPeopleSleepOnGroundContainer = familyInfoSleepOnGroundContainer.querySelector(".form-field-container");

      if (familyInfoNumPeopleSleepOnGroundContainer !== null)
      familyInfoSleepOnGroundContainer.removeChild(familyInfoNumPeopleSleepOnGroundContainer);
    }

    const formBodyElement = document.querySelector("#form-body");
    const recordsContainer = document.querySelector(".form-family-member-records-container");

    if (recordsContainer !== null)
      formBodyElement.removeChild(recordsContainer);
  },
};

export default resetProcessor;

// There might be a size limitation in jekyll so I put the remove of any formatting and removing any other containers
