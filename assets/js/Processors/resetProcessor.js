import CurrentOtherFamilyMemberRecordsContainerRemover from "../Removers/CurrentOtherFamilyMemberRecordsContainerRemover"

const resetProcesor = {
    Process() {
        ClearNumPeopleFieldFormatting.Clear();
        CurrentOtherFamilyMemberRecordsContainerRemover.Remove();
    }
}