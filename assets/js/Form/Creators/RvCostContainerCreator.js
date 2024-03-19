const RvCostContainerCreator = {
  Create(cost) {
    const costFieldContainer = document.createElement("div");
    costFieldContainer.className = "text-field-container";
    costFieldContainer.id = "rv-cost";
    const label = document.createElement("label");
    label.textContent = "Rv cost:";
    label.htmlFor = "rv-cost";
    const input = document.createElement("input");
    input.name = "rv-total-cost";
    input.value = cost;
    input.readOnly = true;
    input.id = "rv-cost";
    costFieldContainer.appendChild(label);
    costFieldContainer.appendChild(input);
    costFieldContainer.hidden = true;

    return costFieldContainer;
  },
};

export default RvCostContainerCreator;