const tentCostContainerRemover = {
    Remove() {
        const formBody = document.querySelector("#form-body");

        if (formBody === null)
            throw new Error("Container with the tent cost is null");

        const tentCost = formBody.querySelector("#tent-cost");

        if (tentCost === null)
            throw new Error("There is no tent cost container to remove");

        formBody.removeChild(tentCost);
    }
}

export default tentCostContainerRemover;