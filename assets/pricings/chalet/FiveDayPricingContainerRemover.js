const FiveDayPricingContainerRemover = {
    Remove() {
        const fiveDayPricingContainer = document.querySelector("#fiveDay-pricing-container");
        const mainChaletPricingContainer = document.querySelector("#main-chalet-pricing-container");

        fiveDayPricingContainer.removeChild(mainChaletPricingContainer);
    }
}

export default FiveDayPricingContainerRemover;