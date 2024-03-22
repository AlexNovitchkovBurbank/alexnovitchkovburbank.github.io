const rvCostContainerRemover = {
    Remove() {
        const formBody = document.querySelector("#form-body");

        if (formBody === null)
            throw new Error("Container with the rv cost is null");

        const rvCost = formBody.querySelector("#rv-cost");

        if (rvCost !== null)
            formBody.removeChild(rvCost);
    }
}

export default rvCostContainerRemover;