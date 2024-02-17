const pricingContainerAppender = {
    Append(container) {
        const fiveDayPricingContainer = document.querySelector("#display-pricing-container");

        fiveDayPricingContainer.appendChild(container);
    }
}

export default pricingContainerAppender;