const tentCostContainerCreator = {
  Create(cost) {
    const costFieldContainer = document.createElement("div");
    costFieldContainer.className = "text-field-container";
    costFieldContainer.id = "tent-cost";
    const label = document.createElement("label");
    label.textContent = "Tent cost:";
    label.htmlFor = "tent-cost";
    const input = document.createElement("input");
    input.name = "tent-total-cost";
    input.value = cost;
    input.readOnly = true;
    input.id = "tent-cost";
    costFieldContainer.appendChild(label);
    costFieldContainer.appendChild(input);
    costFieldContainer.hidden = true;

    return costFieldContainer;
  },
};

export default tentCostContainerCreator;