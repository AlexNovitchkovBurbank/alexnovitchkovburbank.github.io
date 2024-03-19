const numPeopleInputValidator = {
    Validate(numberOfPeopleString) {
      const numberOfPeopleNum = Number.parseInt(numberOfPeopleString);
      if (Number.isNaN(numberOfPeopleNum)) return false;
      if (!Number.isInteger(numberOfPeopleNum)) return false;
  
      return true;
    },
  };

  export default numPeopleInputValidator;
