const CurrentFamilyMemberRecordsContainerRemover = {
    Remove() {
      const formBodyContainer = document.querySelector("#form-body");
      const recordsContainer = document.querySelector(".member-records-container");
  
      if (recordsContainer !== null) formBodyContainer.removeChild(recordsContainer);
    },
  };

  export default CurrentFamilyMemberRecordsContainerRemover;