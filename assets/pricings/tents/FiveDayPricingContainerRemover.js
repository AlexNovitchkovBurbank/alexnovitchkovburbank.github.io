const FiveDayPricingContainerRemover = {
    Remove() {
        const fiveDayPricingContainer = document.querySelector("#fiveDay-pricing-container");
        const mainRvPricingContainer = document.querySelector("#main-tents-pricing-container");

        fiveDayPricingContainer.removeChild(mainRvPricingContainer);
    }
}

export default FiveDayPricingContainerRemover;