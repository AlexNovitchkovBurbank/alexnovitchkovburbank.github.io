const resetProcessor = {
  Process() {
    const mainNumPeopleField = document.querySelector("#num-people-input");
    mainNumPeopleField.classList.remove("input-error");

    const familyInfoStayInChaletContainer = document.querySelector("#stay-in-chalet-container");
    if (familyInfoStayInChaletContainer !== null) {
      const familyInfoNumPeopleInChaletContainer = familyInfoStayInChaletContainer.querySelector(".field");

      if (familyInfoNumPeopleInChaletContainer !== null)
        familyInfoStayInChaletContainer.removeChild(familyInfoNumPeopleInChaletContainer);
    }

    const familyInfoStayInRvContainer = document.querySelector("#stay-in-rv-container");
    if (familyInfoStayInRvContainer !== null) {
      const familyInfoNumPeopleInRvContainer = familyInfoStayInRvContainer.querySelector(".field");

      if (familyInfoNumPeopleInRvContainer !== null)
        familyInfoStayInRvContainer.removeChild(familyInfoNumPeopleInRvContainer);
    }

    const familyInfoStayInTentContainer = document.querySelector("#stay-in-tent-container");
    if (familyInfoStayInTentContainer !== null) {
      const familyInfoNumPeopleInTentContainer = familyInfoStayInTentContainer.querySelector(".field");

      if (familyInfoNumPeopleInTentContainer !== null)
        familyInfoStayInTentContainer.removeChild(familyInfoNumPeopleInTentContainer);
    }

    const familyInfoSleepOnGroundContainer = document.querySelector("#sleep-on-ground-container");
    if (familyInfoSleepOnGroundContainer !== null) {
      const familyInfoNumPeopleSleepOnGroundContainer = familyInfoSleepOnGroundContainer.querySelector(".field");

      if (familyInfoNumPeopleSleepOnGroundContainer !== null)
      familyInfoSleepOnGroundContainer.removeChild(familyInfoNumPeopleSleepOnGroundContainer);
    }

    const familyInfoStayOvernightContainer = document.querySelector("#stay-overnight-container");
    if (familyInfoStayOvernightContainer !== null) {
      const fields = familyInfoStayOvernightContainer.querySelectorAll(".field");
      for (let i = 0; i < fields.length; i++) {
        if (fields[i] !== null)
          familyInfoStayOvernightContainer.removeChild(fields[i]);
      }
    }

    const familyInfoDayUseOnlyContainer = document.querySelector("#day-use-only-container");
    if (familyInfoDayUseOnlyContainer !== null) {
      const familyInfoNumPeopleDayUseOnlyContainer = familyInfoDayUseOnlyContainer.querySelector(".field");

      if (familyInfoNumPeopleDayUseOnlyContainer !== null)
      familyInfoDayUseOnlyContainer.removeChild(familyInfoNumPeopleDayUseOnlyContainer);
    }

    const formBodyContainer = document.querySelector("#form-body");
    const recordsContainer = document.querySelector(".form-family-member-records-container");
    if (recordsContainer !== null)
      formBodyContainer.removeChild(recordsContainer);
  },
};

export default resetProcessor;

// There might be a size limitation in jekyll so I put the remove of any formatting and removing any other containers
