const OvernightPricingContainerRemover = {
    Remove() {
        const overnightPricingContainer = document.querySelector("#overnight-pricing-container");
        const mainOvernightPricingContainer = document.querySelector("#main-overnight-pricing-container");

        overnightPricingContainer.removeChild(mainOvernightPricingContainer);
    }
}

export default OvernightPricingContainerRemover;