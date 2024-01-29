const MainPricingContainerAppender = {
    Append(container) {
        const mainPricingContainer = document.querySelector("#main-pricing-container");

        mainPricingContainer.appendChild(container);
    }
}

export default MainPricingContainerAppender;