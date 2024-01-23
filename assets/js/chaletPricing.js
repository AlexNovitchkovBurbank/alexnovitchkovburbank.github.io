const ChaletPricingProcessor = {
    Process() {
        const container = ChaletPricingContainerCreator.Create();

        document.append(container);
    }
}

export default ChaletPricingProcessor;

const ChaletPricingContainerCreator = {
    Create() {
        const mainContainer = document.createElement("div");
        const prices = ["$137.00", "$265.00", "$365.00", "$465.00", "$565.00", "$665.00", "$765.00", "$865.00", "$965.00", "$1065.00", "$1165.00", "$1265.00", "$1365.00"]
        for (let i = 1; i <= 13; i++) {
            const textPriceContainer = document.createElement("p");
            const textElement = document.createElement("p");
            const priceElement = document.createElement("p");
            if (i === 1)
                textElement.textContent = `${i} Person over 6`;
            else
                textElement.textContent = `${i} People over 6`;
            priceElement = prices[i];

            textPriceContainer.append(textElement);
            textPriceContainer.append(priceElement);
            mainContainer.append(textPriceContainer);
        }

        return mainContainer;
    }
}