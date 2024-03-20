const chaletCostContainerRemover = {
    Remove() {
        const formBody = document.querySelector("#form-body");

        if (formBody === null)
            throw new Error("Container with the chalet cost is null");

        const chaletCost = formBody.querySelector("#chalet-cost");

        if (chaletCost === null)
            throw new Error("There is no chalet cost container to remove");

        formBody.removeChild(chaletCost);
    }
}

export default chaletCostContainerRemover;