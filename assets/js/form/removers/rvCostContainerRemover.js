const rvCostContainerRemover = {
    Remove() {
        const formBody = document.querySelector("#form-body");

        if (formBody === null)
            throw new Error("Container with the rv cost is null");

        const rvCost = formBody.querySelector("#rv-cost");

        if (rvCost === null)
            throw new Error("There is no rv cost container to remove");

        formBody.removeChild(rvCost);
    }
}

export default rvCostContainerRemover;