const FiveDayPricingContainerRemover = {
    Remove() {
        const fiveDayPricingContainer = document.querySelector("#fiveDay-pricing-container");
        const mainRvPricingContainer = document.querySelector("#main-rv-pricing-container");

        fiveDayPricingContainer.removeChild(mainRvPricingContainer);
    }
}

export default FiveDayPricingContainerRemover;