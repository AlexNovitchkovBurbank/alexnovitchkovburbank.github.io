import CurrentFamilyMemberRecordsContainerRemover from "../Removers/CurrentFamilyMemberRecordsContainerRemover.js";
import NumPeopleInputErrorRemover from "../Removers/NumPeopleInputErrorRemover.js";
import DayUseOnlyNumberOfPeopleRemover from "../Removers/DayUseOnlyCheckboxFieldsRemover.js";
import ChaletCheckboxFieldsRemover from "../Removers/ChaletCheckboxFieldsRemover.js";
import RvCheckboxFieldsRemover from "../Removers/RvCheckboxFieldsRemover.js";
import TentCheckboxFieldsRemover from "../Removers/TentCheckboxFieldsRemover.js";
import OvernightCheckboxFieldsRemover from "../Removers/SleepOnGroundCheckboxFieldsRemover.js";

const ResetProcessor = {
  Process() {
    const numPeopleInputId = "num-people-input";
    NumPeopleInputErrorRemover.Remove(numPeopleInputId);

    ChaletCheckboxFieldsRemover.Remove();
    RvCheckboxFieldsRemover.Remove();
    TentCheckboxFieldsRemover.Remove();
    SleepOnGroundCheckboxFieldsRemover.Remove();
    OvernightCheckboxFieldsRemover.Remove();
    DayUseOnlyNumberOfPeopleRemover.Remove();
    CurrentFamilyMemberRecordsContainerRemover.Remove();
  },
};

export default ResetProcessor;
