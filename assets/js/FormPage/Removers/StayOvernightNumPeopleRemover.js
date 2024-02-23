const StayOvernightNumberOfPeopleRemover = {
  Remove() {
    const stayOvernightContainer = document.querySelector(
      "#stay-overnight-container"
    );
    if (stayOvernightContainer !== null) {
      const fields = stayOvernightContainer.querySelectorAll(".field");

      for (let i = 0; i < fields.length; i++) {
        if (fields[i] !== null) stayOvernightContainer.removeChild(fields[i]);
      }
    }
  },
};

export default StayOvernightNumberOfPeopleRemover;
