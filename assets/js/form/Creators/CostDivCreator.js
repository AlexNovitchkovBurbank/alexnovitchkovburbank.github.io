const CostDivCreator = {
  Create(cost, type) {
    const costDivElement = document.createElement('p');

    if (String.toString(type) === 'Chalet' || String.toString(type) === 'RV') {
      costDivElement.textContent = `Cost for a ${type} stay is $${cost}`;
    } else {
      costDivElement.textContent = `Cost for an ${type} stay is $${cost}`;
    }

    return costDivElement;
  },
};

export default CostDivCreator;
