const dayUseOnlyCostContainerRemover = {
    Remove() {
        const formBody = document.querySelector("#form-body");

        if (formBody === null)
            throw new Error("Container with the dayUseOnly cost is null");

        const dayUseOnlyCost = formBody.querySelector("#day-use-only-cost");

        if (dayUseOnlyCost === null)
            throw new Error("There is no dayUseOnly cost container to remove");

        formBody.removeChild(dayUseOnlyCost);
    }
}

export default dayUseOnlyCostContainerRemover;