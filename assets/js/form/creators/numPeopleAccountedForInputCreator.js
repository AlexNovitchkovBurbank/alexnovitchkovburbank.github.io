const numPeopleAccountedForInputCreator = {
    Create() {
        const input = document.createElement("input");
        input.value = 0;
        input.hidden = true;
        input.id = "num-people-accounted-for";
        
        return input;
    }
}