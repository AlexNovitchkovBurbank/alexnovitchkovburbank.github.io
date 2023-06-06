function initializePageWithContent() {
  let boxId = 0; // The first box is box 0
  let elementHeightOnViewablePage = 0;

  while (
    boxId < document.getElementsByClassName("PersonalProjects").length &&
    elementHeightOnViewablePage <= 768
  ) {
    console.log(boxId);
    let boxElement = document.querySelector("#ProjectBox" + boxId);
    boxElement.classList.add("animated__animate");
    boxElement.classList.add("animated__heartBeat");
    elementHeightOnViewablePage =
      elementHeightOnViewablePage + boxElement.scrollHeight;
    boxId++;
  }

  boxId = 1000; // The School Project container starts with box id 1000
  while (
    boxId - 1000 < document.getElementsByClassName("PersonalProjects").length &&
    elementHeightOnViewablePage <= 768
  ) {
    document.getElementById("ProjectBox" + boxId).style.visibility = "visible";
    boxId++;
  }
}

function checkToDisplayNewProject() {
  let projectsContainer = document.getElementById("ProjectsContainer");
  let boxId = 0; // The first box is box 0

  while (
    boxId < document.getElementsByClassName("SchoolProjects").length &&
    elementHeightOnViewablePage <= 768
  ) {
    document.getElementById("ProjectBox" + boxId).style.visibility = "visible";
    boxId++;
  }

  boxId = 1000;
  while (
    boxId - 1000 < document.getElementsByClassName("PersonalProjects").length &&
    elementHeightOnViewablePage <= 768
  ) {
    document.getElementById("ProjectBox" + boxId).style.visibility = "visible";
    boxId++;
  }

  return false;
}

/* formElement.addEventListener("scroll", () => {
  if (checkToDisplayNewProject()) {
    document.getElementById();
  }
}); */
