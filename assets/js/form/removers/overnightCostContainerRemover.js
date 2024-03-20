const overnightCostContainerRemover = {
    Remove() {
        const formBody = document.querySelector("#form-body");

        if (formBody === null)
            throw new Error("Container with the overnight cost is null");

        const overnightCost = formBody.querySelector("#overnight-cost");

        if (overnightCost === null)
            throw new Error("There is no overnight cost container to remove");

        formBody.removeChild(overnightCost);
    }
}

export default overnightCostContainerRemover;