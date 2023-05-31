import "animate.css";

let numBoxes = 1;
let viewHeightOfContentOnPage;

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

function initializePageWithContent() {
  let PersonalProjectsContainer = document.querySelector("#PeronalProjects");
  let projectBoxElement = document.querySelector("ProjectBox");

  while (viewHeightOfContentOnPageviewHeightOfContentOnPage <= 768) {
    projectBoxElement.item(numBoxes - 1);

    numBoxes++;
  }
}

function checkToDisplayNewProject() {
  let projectsContainer = document.getElementById("ProjectsContainer");

  if (document.getElementsByClassName("PersonalProjects").length)
    if (projectsContainer.clientHeight >= 768) {
    }

  return false;
}

formElement.addEventListener("scroll", () => {
  if (checkToDisplayNewProject()) {
    document.getElementById();
  }
});
