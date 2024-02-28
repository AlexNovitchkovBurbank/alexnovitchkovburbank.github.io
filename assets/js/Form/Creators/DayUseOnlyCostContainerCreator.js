const DayUseOnlyCostContainerCreator = {
    Create(cost) {
        const inputFieldContainer =
        document.createElement("div");
    inputFieldContainer.className =
      "field";
    paragraphContainer.id = "num-beds-field-stay-in-chalet-checkbox";
    const paragraph = document.createElement("p");
    inputLabel.textContent = `Cost: ${cost}`;
    inputLabel.htmlFor = "day-use-only-cost-input-for-day-use-only-checkbox";
    const input = document.createElement("input");
    input.name = "Day-use-cost";
    input.id = "day-use-only-cost-input-for-day-use-only-checkbox";
    input.required = true;
    inputFieldContainer.appendChild(paragraph);
    inputFieldContainer.appendChild(input);

    return inputFieldContainer;
    }
}

export default DayUseOnlyCostContainerCreator;