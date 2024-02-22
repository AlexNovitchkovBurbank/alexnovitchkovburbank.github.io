const stayOvernightNumberOfPeopleRemover = {
  Remove() {
    const stayOvernightContainer = document.querySelector(
      '#stay-overnight-container'
    );
    const fields = stayOvernightContainer.querySelectorAll('.field');

    for (let i = 0; i < fields.length; i++) {
      if (stayOvernightContainer !== null && fields[i] !== null)
        stayOvernightContainer.removeChild(fields[i]);
    }
  },
};

export default stayOvernightNumberOfPeopleRemover;
