const mainPricingContainerAppender = {
    Append(container) {
        const fiveDayPricingContainer = document.querySelector("#main-pricing-container");

        fiveDayPricingContainer.appendChild(container);
    }
}

export default mainPricingContainerAppender;