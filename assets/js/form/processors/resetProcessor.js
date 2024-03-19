import currentFamilyMemberRecordsContainerRemover from "../removers/currentFamilyMemberRecordsContainerRemover.js";
import numPeopleInputErrorRemover from "../removers/numPeopleInputErrorRemover.js";
import DayUseOnlyNumberOfPeopleRemover from "../removers/dayUseOnlyCheckboxFieldsRemover.js";
import sleepOnGroundCheckboxFieldsRemover from "../removers/sleepOnGroundCheckboxFieldsRemover.js";
import chaletCheckboxFieldsRemover from "../removers/chaletCheckboxFieldsRemover.js";
import rvCheckboxFieldsRemover from "../removers/rvCheckboxFieldsRemover.js";
import tentCheckboxFieldsRemover from "../removers/tentCheckboxFieldsRemover.js";
import overnightCheckboxFieldsRemover from "../removers/overnightCheckboxFieldsRemover.js";

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
  },
};

export default resetProcessor;
