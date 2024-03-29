const chaletCostContainerCreator = {
  Create(cost) {
    const costFieldContainer = document.createElement("div");
    costFieldContainer.className = "text-field-container";
    costFieldContainer.id = "chalet-cost";
    const label = document.createElement("label");
    label.textContent = "Chalet cost:";
    label.htmlFor = "chalet-cost";
    const input = document.createElement("input");
    input.name = "chalet stay cost";
    input.value = `$${cost}`;
    input.readOnly = true;
    input.id = "chalet-cost";
    costFieldContainer.appendChild(label);
    costFieldContainer.appendChild(input);
    costFieldContainer.hidden = true;

    return costFieldContainer;
  },
};

export default chaletCostContainerCreator;