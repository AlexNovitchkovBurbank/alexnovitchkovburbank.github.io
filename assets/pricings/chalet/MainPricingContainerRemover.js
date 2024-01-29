const MainPricingContainerRemover = {
    Remove() {
        const mainPricingContainer = document.querySelector("#main-pricing-container");
        const mainRvPricingContainer = document.querySelector("#main-chalet-pricing-container");

        mainPricingContainer.removeChild(mainRvPricingContainer);
    }
}

export default MainPricingContainerRemover;