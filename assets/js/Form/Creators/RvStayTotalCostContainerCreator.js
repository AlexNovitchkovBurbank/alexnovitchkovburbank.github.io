const RvStayTotalCostContainerCreator = {
  Create(cost) {
    const paragraphFieldContainer = document.createElement("div");
    paragraphFieldContainer.className = "text-field";
    paragraphFieldContainer.id = "rv-total-cost";
    const paragraph = document.createElement("p");
    paragraphFieldContainer.textContent = `Cost: ${cost}`;
    paragraphFieldContainer.appendChild(paragraph);

    return paragraphFieldContainer;
  },
};

export default RvStayTotalCostContainerCreator;