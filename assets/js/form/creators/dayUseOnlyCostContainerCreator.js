const dayUseOnlyCostContainerCreator = {
  Create(cost) {
    const costFieldContainer = document.createElement("div");
    costFieldContainer.className = "text-field-container";
    costFieldContainer.id = "day-use-only-cost";
    const label = document.createElement("label");
    label.textContent = "Day use only cost:";
    label.htmlFor = "day-use-only-cost";
    const input = document.createElement("input");
    input.name = "day use only cost";
    input.value = `$${cost}`;
    input.readOnly = true;
    input.id = "day-use-only-cost";
    costFieldContainer.appendChild(label);
    costFieldContainer.appendChild(input);
    costFieldContainer.hidden = true;

    return costFieldContainer;
  },
};

export default dayUseOnlyCostContainerCreator;