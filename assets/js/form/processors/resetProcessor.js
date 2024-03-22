import currentFamilyMemberRecordsContainerRemover from "../removers/currentFamilyMemberRecordsContainerRemover.js";
import numPeopleInputErrorRemover from "../removers/numPeopleInputErrorRemover.js";
import DayUseOnlyNumberOfPeopleRemover from "../removers/dayUseOnlyCheckboxFieldsRemover.js";
import sleepOnGroundCheckboxFieldsRemover from "../removers/sleepOnGroundCheckboxFieldsRemover.js";
import chaletCheckboxFieldsRemover from "../removers/chaletCheckboxFieldsRemover.js";
import rvCheckboxFieldsRemover from "../removers/rvCheckboxFieldsRemover.js";
import tentCheckboxFieldsRemover from "../removers/tentCheckboxFieldsRemover.js";
import overnightCheckboxFieldsRemover from "../removers/overnightCheckboxFieldsRemover.js";
import chaletCostContainerRemover from "../removers/chaletCostContainerRemover.js";
import rvCostContainerRemover from "../removers/rvCostContainerRemover.js";
import tentCostContainerRemover from "../removers/tentCostContainerRemover.js";
import overnightCostContainerRemover from "../removers/overnightCostContainerRemover.js";
import dayUseOnlyCostContainerRemover from "../removers/dayUseOnlyCostContainerRemover.js";
import setInitialValueForNumPeopleAccountedForInputProcessor from "./setInitialValueForNumPeopleAccountedForInputProcessor.js";

const resetProcessor = {
  Process() {
    const numPeopleInputId = "num-people-input";
    numPeopleInputErrorRemover.Remove(numPeopleInputId);

    chaletCheckboxFieldsRemover.Remove();
    rvCheckboxFieldsRemover.Remove();
    tentCheckboxFieldsRemover.Remove();
    sleepOnGroundCheckboxFieldsRemover.Remove();
    overnightCheckboxFieldsRemover.Remove();
    DayUseOnlyNumberOfPeopleRemover.Remove();
    currentFamilyMemberRecordsContainerRemover.Remove();
    chaletCostContainerRemover.Remove();
    rvCostContainerRemover.Remove();
    tentCostContainerRemover.Remove();
    overnightCostContainerRemover.Remove();
    dayUseOnlyCostContainerRemover.Remove();
    setInitialValueForNumPeopleAccountedForInputProcessor.Process();
  },
};

export default resetProcessor;
