const overnightCostContainerCreator = {
  Create(cost) {
    const costFieldContainer = document.createElement("div");
    costFieldContainer.className = "text-field-container";
    costFieldContainer.id = "overnight-cost";
    const label = document.createElement("label");
    label.textContent = "Overnight cost:";
    label.htmlFor = "overnight-cost";
    const input = document.createElement("input");
    input.name = "overnight-total-cost";
    input.value = cost;
    input.readOnly = true;
    input.id = "overnight-cost";
    costFieldContainer.appendChild(label);
    costFieldContainer.appendChild(input);
    costFieldContainer.hidden = true;

    return costFieldContainer;
  },
};

export default overnightCostContainerCreator;