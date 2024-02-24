const StayOvernightNumberOfPeopleRemover = {
  Remove() {
    const stayOvernightCheckboxContainer = document.querySelector(
      "#stay-overnight-checkbox-container"
    );
    if (stayOvernightCheckboxContainer !== null) {
      const fields = stayOvernightCheckboxContainer.querySelectorAll(".field");

      for (let i = 0; i < fields.length; i++) {
        stayOvernightCheckboxContainer.removeChild(fields[i]);
      }
    }
  },
};

export default StayOvernightNumberOfPeopleRemover;
