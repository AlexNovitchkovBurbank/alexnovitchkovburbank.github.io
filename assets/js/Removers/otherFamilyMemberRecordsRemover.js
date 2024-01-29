const OtherFamilyMemberRecordsRemover = {
    Remove() {
      const formBodyElement = document.querySelector("#form-body");
      const recordsContainer = document.querySelector(".form-records-container");
  
      if (recordsContainer !== null) formBodyElement.removeChild(recordsContainer);
    },
  };

  export default OtherFamilyMemberRecordsRemover;