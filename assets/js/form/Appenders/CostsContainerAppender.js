const CostsContainerAppender = {
    Append(container) {
      const costsContainerElement = document.querySelector("#costs");
      costsContainerElement.appendChild(container);
    },
  };

export default CostsContainerAppender;