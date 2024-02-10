const FiveDayPricingContainerAppender = {
    Append(container) {
        const fiveDayPricingContainer = document.querySelector("#fiveDay-pricing-container");

        fiveDayPricingContainer.appendChild(container);
    }
}

export default FiveDayPricingContainerAppender;