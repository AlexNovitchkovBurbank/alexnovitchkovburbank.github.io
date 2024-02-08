const resetProcessor = {
  Process() {
    const mainNumPeopleField = document.querySelector("#num-people-input");
    mainNumPeopleField.classList.remove("input-error");

    const formBodyElement = document.querySelector("#form-body");
    const recordsContainer = document.querySelector(".form-records-container");

    if (recordsContainer !== null)
      formBodyElement.removeChild(recordsContainer);
  },
};

export default resetProcessor;

// There might be a size limitation in jekyll so I put the remove of any formatting and removing any other containers
