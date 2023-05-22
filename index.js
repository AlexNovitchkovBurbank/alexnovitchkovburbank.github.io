let formElement = document.querySelector("form");

function displayAlert(stringToDisplay) {
  alert(stringToDisplay);
}

function checkRequiredFields() {
  let stringToDisplay = "You must fill in the following: ";
  if (formElement.elements.item(0).value === "")
    stringToDisplay = stringToDisplay + "\n\tName";

  if (formElement.elements.item(2).value === "")
    stringToDisplay = stringToDisplay + "\n\tEmail";

  if (formElement.elements.item(3).value === "")
    stringToDisplay = stringToDisplay + "\n\tPassword";

  if (stringToDisplay.search("\n") > 0) {
    displayAlert(stringToDisplay);
  }
}

formElement.addEventListener("submit", () => {
  checkRequiredFields();
});
