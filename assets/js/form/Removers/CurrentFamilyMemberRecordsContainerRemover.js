const CurrentFamilyMemberRecordsContainerRemover = {
    Remove() {
      const formBodyElement = document.querySelector("#form-body");
      const recordsContainer = document.querySelector(".form-family-member-records-container");
  
      if (recordsContainer !== null) formBodyElement.removeChild(recordsContainer);
    },
  };

  export default CurrentFamilyMemberRecordsContainerRemover;