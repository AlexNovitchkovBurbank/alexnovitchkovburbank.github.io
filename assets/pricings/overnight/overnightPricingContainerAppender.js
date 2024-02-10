const MainPricingContainerAppender = {
    Append(container) {
        const overnightPricingContainer = document.querySelector("#overnight-pricing-container");

        overnightPricingContainer.appendChild(container);
    }
}

export default MainPricingContainerAppender;