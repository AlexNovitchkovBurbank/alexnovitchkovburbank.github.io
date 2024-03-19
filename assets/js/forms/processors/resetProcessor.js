import currentFamilyMemberRecordsContainerRemover from "../Removers/currentFamilyMemberRecordsContainerRemover.js";
import numPeopleInputErrorRemover from "../Removers/numPeopleInputErrorRemover.js";
import DayUseOnlyNumberOfPeopleRemover from "../Removers/dayUseOnlyCheckboxFieldsRemover.js";
import sleepOnGroundCheckboxFieldsRemover from "../Removers/sleepOnGroundCheckboxFieldsRemover.js";
import chaletCheckboxFieldsRemover from "../Removers/chaletCheckboxFieldsRemover.js";
import rvCheckboxFieldsRemover from "../Removers/rvCheckboxFieldsRemover.js";
import tentCheckboxFieldsRemover from "../Removers/tentCheckboxFieldsRemover.js";
import overnightCheckboxFieldsRemover from "../Removers/overnightCheckboxFieldsRemover.js";

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
