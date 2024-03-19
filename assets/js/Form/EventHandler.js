import FamilyMemberRecordsProcessor from "./Processors/FamilyMemberRecordsProcessor.js";
import FamilyInfoProcessor from "./Processors/FamilyInfoProcessor.js";
import OnChaletCheckboxClickProcessor from "./Processors/OnChaletCheckboxClickProcessor.js";
import OnRvCheckboxClickProcessor from "./Processors/OnRvCheckboxClickProcessor.js";
import OnTentCheckboxClickProcessor from "./Processors/OnTentCheckboxClickProcessor.js";
import OnSleepOnGroundCheckboxClickProcessor from "./Processors/OnSleepOnGroundCheckboxClickProcessor.js";
import OnOvernightCheckboxClickProcessor from "./Processors/OnOvernightCheckboxClickProcessor.js";
import ResetProcessor from "./Processors/ResetProcessor.js";
import OnDayUseOnlyCheckboxClickProcessor from "./Processors/OnDayUseOnlyCheckboxClickProcessor.js";
import CalculatePriceForChaletProcessor from "./Processors/CalculatePriceForChaletProcessor.js";
import CalculatePriceForRvProcessor from "./Processors/CalculatePriceForRvProcessor.js";
import CalculatePriceForTentProcessor from "./Processors/CalculatePriceForTentProcessor.js";
import CalculatePriceForDayUseOnlyProcessor from "./Processors/CalculatePriceForDayUseOnlyProcessor.js";
import CalculateOvernightPriceProcessor from "./Processors/CalculateOvernightPriceProcessor.js";
import StringToIntConverter from "./Converters/StringToIntConverter.js";

document.addEventListener("DOMContentLoaded", () => {
  FamilyInfoProcessor.Process();

  const numPeopleFieldContainer = document.querySelector(
    "#num-people-field-container"
  );
  if (numPeopleFieldContainer !== null) {
    const numPeopleInput =
      numPeopleFieldContainer.querySelector("#num-people-input");
    if (numPeopleInput !== null) {
      numPeopleInput.addEventListener("keyup", () => {
        try {
          FamilyMemberRecordsProcessor.Process(numPeopleInput.value);
        } catch (error) {
          alert(error.message);
        }
      });
    }
  }

  const sleepOnGroundCheckboxField = document.querySelector(
    "#sleep-on-ground-checkbox"
  );
  if (sleepOnGroundCheckboxField !== null) {
    sleepOnGroundCheckboxField.addEventListener("change", () => {
      OnSleepOnGroundCheckboxClickProcessor.Process();
    });
  }

  chaletCheckboxHandler();
  rvCheckboxHandler();
  tentCheckboxHandler();
  dayUseOnlyCheckboxHandler();
  overnightCheckboxHandler();

  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    ResetProcessor.Process();
  });
});

function chaletCheckboxHandler() {
  const ChaletCheckbox = document.querySelector("#chalet-checkbox");
  if (ChaletCheckbox !== null) {
    ChaletCheckbox.addEventListener("change", () => {
      OnChaletCheckboxClickProcessor.Process();

      const chaletNumBedsFieldContainer = document.querySelector(
        "#num-beds-field-container-for-chalet-checkbox"
      );
      const chaletNumNightsFieldContainer = document.querySelector(
        "#num-nights-field-container-for-chalet-checkbox"
      );

      if (
        chaletNumBedsFieldContainer !== null &&
        chaletNumNightsFieldContainer !== null
      ) {
        const chaletCheckboxNumBedsInput = document.querySelector(
          "#num-beds-input-for-chalet-checkbox"
        );
        if (chaletCheckboxNumBedsInput !== null) {
          chaletCheckboxNumBedsInput.addEventListener("keyup", () => {
            const chaletCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-chalet-checkbox"
            );

            const chaletCheckboxNumPeopleInputText =
              StringToIntConverter.Convert(chaletCheckboxNumPeopleInput.value);

            const chaletCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-chalet-checkbox"
            );

            const chaletCheckboxNumNightsText = StringToIntConverter.Convert(
              chaletCheckboxNumNightsInput.value
            );

            const chaletCheckboxNumBedsInputText = StringToIntConverter.Convert(
              chaletCheckboxNumBedsInput.value
            );
            if (
              !isNaN(chaletCheckboxNumBedsInputText) &&
              !isNaN(chaletCheckboxNumPeopleInputText) &&
              !isNaN(chaletCheckboxNumNightsText)
            )
              CalculatePriceForChaletProcessor.Process();
          });
        }

        const chaletCheckboxNumPeopleInput = document.querySelector(
          "#num-people-input-for-chalet-checkbox"
        );
        if (chaletCheckboxNumPeopleInput !== null) {
          chaletCheckboxNumPeopleInput.addEventListener("keyup", () => {
            const chaletCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-chalet-checkbox"
            );

            const chaletCheckboxNumNightsText = StringToIntConverter.Convert(
              chaletCheckboxNumNightsInput.value
            );

            const chaletCheckboxNumBedsInput = document.querySelector(
              "#num-beds-input-for-chalet-checkbox"
            );

            const chaletCheckboxNumBedsInputText = StringToIntConverter.Convert(
              chaletCheckboxNumBedsInput.value
            );

            const chaletCheckboxNumPeopleInputText =
              StringToIntConverter.Convert(chaletCheckboxNumPeopleInput.value);

            if (
              !isNaN(chaletCheckboxNumPeopleInputText) &&
              !isNaN(chaletCheckboxNumNightsText) &&
              !isNaN(chaletCheckboxNumBedsInputText)
            )
              CalculatePriceForChaletProcessor.Process();
          });
        }

        const chaletCheckboxNumNightsInput = document.querySelector(
          "#num-nights-input-for-chalet-checkbox"
        );
        if (chaletCheckboxNumNightsInput !== null) {
          chaletCheckboxNumNightsInput.addEventListener("keyup", () => {
            const chaletCheckboxNumBedsInput = document.querySelector(
              "#num-beds-input-for-chalet-checkbox"
            );
            const chaletCheckboxNumBedsInputText = StringToIntConverter.Convert(
              chaletCheckboxNumBedsInput.value
            );

            const chaletCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-chalet-checkbox"
            );

            const chaletCheckboxNumPeopleInputText =
              StringToIntConverter.Convert(chaletCheckboxNumPeopleInput.value);

            const chaletCheckboxNumNightsText = StringToIntConverter.Convert(
              chaletCheckboxNumNightsInput.value
            );

            if (
              !isNaN(chaletCheckboxNumBedsInputText) &&
              !isNaN(chaletCheckboxNumPeopleInputText) &&
              !isNaN(chaletCheckboxNumNightsText)
            )
              CalculatePriceForChaletProcessor.Process();
          });
        }
      }
    });
  }
}

function rvCheckboxHandler() {
  const rvCheckbox = document.querySelector("#rv-checkbox");
  if (rvCheckbox !== null) {
    rvCheckbox.addEventListener("change", () => {
      OnRvCheckboxClickProcessor.Process();

      const rvNumRvsFieldContainer = document.querySelector(
        "#num-rvs-field-container-for-rv-checkbox"
      );
      const rvNumNightsFieldContainer = document.querySelector(
        "#num-nights-field-container-for-rv-checkbox"
      );
      if (
        rvNumRvsFieldContainer !== null &&
        rvNumNightsFieldContainer !== null
      ) {
        const rvCheckboxNumRvsInput = document.querySelector(
          "#num-rvs-input-for-rv-checkbox"
        );
        if (rvCheckboxNumRvsInput !== null) {
          rvCheckboxNumRvsInput.addEventListener("keyup", () => {
            const rvCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-rv-checkbox"
            );

            const rvCheckboxNumPeopleInputText = StringToIntConverter.Convert(
              rvCheckboxNumPeopleInput.value
            );

            const rvCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-rv-checkbox"
            );

            const rvCheckboxNumNightsText = StringToIntConverter.Convert(
              rvCheckboxNumNightsInput.value
            );

            const rvCheckboxNumRvsInputText = StringToIntConverter.Convert(
              rvCheckboxNumRvsInput.value
            );
            if (
              !isNaN(rvCheckboxNumRvsInputText) &&
              !isNaN(rvCheckboxNumPeopleInputText) &&
              !isNaN(rvCheckboxNumNightsText)
            )
              CalculatePriceForRvProcessor.Process();
          });
        }

        const rvCheckboxNumPeopleInput = document.querySelector(
          "#num-people-input-for-rv-checkbox"
        );
        if (rvCheckboxNumPeopleInput !== null) {
          rvCheckboxNumPeopleInput.addEventListener("keyup", () => {
            const rvCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-rv-checkbox"
            );

            const rvCheckboxNumNightsText = StringToIntConverter.Convert(
              rvCheckboxNumNightsInput.value
            );

            const rvCheckboxNumRvsInput = document.querySelector(
              "#num-rvs-input-for-rv-checkbox"
            );

            const rvCheckboxNumRvsInputText = StringToIntConverter.Convert(
              rvCheckboxNumRvsInput.value
            );

            const rvCheckboxNumPeopleInputText = StringToIntConverter.Convert(
              rvCheckboxNumPeopleInput.value
            );

            if (
              !isNaN(rvCheckboxNumPeopleInputText) &&
              !isNaN(rvCheckboxNumNightsText) &&
              !isNaN(rvCheckboxNumRvsInputText)
            )
              CalculatePriceForRvProcessor.Process();
          });
        }

        const rvCheckboxNumNightsInput = document.querySelector(
          "#num-nights-input-for-rv-checkbox"
        );
        if (rvCheckboxNumNightsInput !== null) {
          rvCheckboxNumNightsInput.addEventListener("keyup", () => {
            const rvCheckboxNumRvsInput = document.querySelector(
              "#num-rvs-input-for-rv-checkbox"
            );
            const rvCheckboxNumRvsInputText = StringToIntConverter.Convert(
              rvCheckboxNumRvsInput.value
            );

            const rvCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-rv-checkbox"
            );

            const rvCheckboxNumPeopleInputText = StringToIntConverter.Convert(
              rvCheckboxNumPeopleInput.value
            );

            const rvCheckboxNumNightsText = StringToIntConverter.Convert(
              rvCheckboxNumNightsInput.value
            );

            if (
              !isNaN(rvCheckboxNumRvsInputText) &&
              !isNaN(rvCheckboxNumPeopleInputText) &&
              !isNaN(rvCheckboxNumNightsText)
            )
              CalculatePriceForRvProcessor.Process();
          });
        }
      }
    });
  }
}

function tentCheckboxHandler() {
  const tentCheckbox = document.querySelector("#tent-checkbox");
  if (tentCheckbox !== null) {
    tentCheckbox.addEventListener("change", () => {
      OnTentCheckboxClickProcessor.Process();

      const tentNumTentsFieldContainer = document.querySelector(
        "#num-tents-field-container-for-tent-checkbox"
      );
      const tentNumNightsFieldContainer = document.querySelector(
        "#num-tents-input-for-tent-checkbox"
      );
      if (
        tentNumTentsFieldContainer !== null &&
        tentNumNightsFieldContainer !== null
      ) {
        const tentCheckboxNumTentsInput = document.querySelector(
          "#num-tents-input-for-tent-checkbox"
        );
        if (tentCheckboxNumTentsInput !== null) {
          tentCheckboxNumTentsInput.addEventListener("keyup", () => {
            const tentCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-tent-checkbox"
            );

            const tentCheckboxNumPeopleInputText = StringToIntConverter.Convert(
              tentCheckboxNumPeopleInput.value
            );

            const tentCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-tent-checkbox"
            );

            const tentCheckboxNumNightsText = StringToIntConverter.Convert(
              tentCheckboxNumNightsInput.value
            );

            const tentCheckboxNumTentsInputText = StringToIntConverter.Convert(
              tentCheckboxNumTentsInput.value
            );
            if (
              !isNaN(tentCheckboxNumTentsInputText) &&
              !isNaN(tentCheckboxNumPeopleInputText) &&
              !isNaN(tentCheckboxNumNightsText)
            )
              CalculatePriceForTentProcessor.Process();
          });
        }

        const tentCheckboxNumPeopleInput = document.querySelector(
          "#num-people-input-for-tent-checkbox"
        );
        if (tentCheckboxNumPeopleInput !== null) {
          tentCheckboxNumPeopleInput.addEventListener("keyup", () => {
            const tentCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-tent-checkbox"
            );

            const tentCheckboxNumNightsText = StringToIntConverter.Convert(
              tentCheckboxNumNightsInput.value
            );

            const tentCheckboxNumTentsInput = document.querySelector(
              "#num-tents-input-for-tent-checkbox"
            );

            const tentCheckboxNumTentsInputText = StringToIntConverter.Convert(
              tentCheckboxNumTentsInput.value
            );

            const tentCheckboxNumPeopleInputText = StringToIntConverter.Convert(
              tentCheckboxNumPeopleInput.value
            );

            if (
              !isNaN(tentCheckboxNumPeopleInputText) &&
              !isNaN(tentCheckboxNumNightsText) &&
              !isNaN(tentCheckboxNumTentsInputText)
            )
              CalculatePriceForTentProcessor.Process();
          });
        }

        const tentCheckboxNumNightsInput = document.querySelector(
          "#num-nights-input-for-tent-checkbox"
        );
        if (tentCheckboxNumNightsInput !== null) {
          tentCheckboxNumNightsInput.addEventListener("keyup", () => {
            const tentCheckboxNumTentsInput = document.querySelector(
              "#num-tents-input-for-tent-checkbox"
            );
            const tentCheckboxNumTentsInputText = StringToIntConverter.Convert(
              tentCheckboxNumTentsInput.value
            );

            const tentCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-tent-checkbox"
            );

            const tentCheckboxNumPeopleInputText = StringToIntConverter.Convert(
              tentCheckboxNumPeopleInput.value
            );

            const tentCheckboxNumNightsText = StringToIntConverter.Convert(
              tentCheckboxNumNightsInput.value
            );

            if (
              !isNaN(tentCheckboxNumTentsInputText) &&
              !isNaN(tentCheckboxNumPeopleInputText) &&
              !isNaN(tentCheckboxNumNightsText)
            )
              CalculatePriceForTentProcessor.Process();
          });
        }
      }
    });
  }
}

function dayUseOnlyCheckboxHandler() {
  const dayUseOnlyCheckbox = document.querySelector(
    "#day-use-only-checkbox"
  );

  if (dayUseOnlyCheckbox !== null) {
    dayUseOnlyCheckbox.addEventListener("change", () => {
      OnDayUseOnlyCheckboxClickProcessor.Process();

      const dayUseOnlyCheckboxNumPeopleInput = document.querySelector(
        "#num-people-input-for-day-use-only-checkbox"
      );

      if (dayUseOnlyCheckboxNumPeopleInput !== null) {
        dayUseOnlyCheckboxNumPeopleInput.addEventListener("keyup", () => {
          const dayUseOnlyCheckboxNumNightsInput = document.querySelector(
            "#num-days-input-for-day-use-only-checkbox"
          );

          const dayUseOnlyCheckboxNumNightsText = StringToIntConverter.Convert(
            dayUseOnlyCheckboxNumNightsInput.value
          );

          const dayUseOnlyCheckboxNumPeopleInputText =
            StringToIntConverter.Convert(
              dayUseOnlyCheckboxNumPeopleInput.value
            );

          if (
            !isNaN(dayUseOnlyCheckboxNumPeopleInputText) &&
            !isNaN(dayUseOnlyCheckboxNumNightsText)
          )
            CalculatePriceForDayUseOnlyProcessor.Process();
        });
      }

      const dayUseOnlyCheckboxNumNightsInput = document.querySelector(
        "#num-days-input-for-day-use-only-checkbox"
      );
      if (dayUseOnlyCheckboxNumNightsInput !== null) {
        dayUseOnlyCheckboxNumNightsInput.addEventListener("keyup", () => {
          const dayUseOnlyCheckboxNumPeopleInput = document.querySelector(
            "#num-people-input-for-day-use-only-checkbox"
          );

          const dayUseOnlyCheckboxNumPeopleInputText =
            StringToIntConverter.Convert(
              dayUseOnlyCheckboxNumPeopleInput.value
            );

          const dayUseOnlyCheckboxNumNightsText = StringToIntConverter.Convert(
            dayUseOnlyCheckboxNumNightsInput.value
          );

          if (
            !isNaN(dayUseOnlyCheckboxNumPeopleInputText) &&
            !isNaN(dayUseOnlyCheckboxNumNightsText)
          )
            CalculatePriceForDayUseOnlyProcessor.Process();
        });
      }
    });
  }
}

function overnightCheckboxHandler() {
  const overnightCheckbox = document.querySelector("#overnight-checkbox");

  if (overnightCheckbox !== null) {
    overnightCheckbox.addEventListener("change", () => {
      OnOvernightCheckboxClickProcessor.Process();

      const overnightCheckboxNumPeopleInput = document.querySelector(
        "#num-people-input-for-overnight-checkbox"
      );

      if (overnightCheckboxNumPeopleInput !== null) {
        overnightCheckboxNumPeopleInput.addEventListener("keyup", () => {
          const overnightCheckboxNumNightsInput = document.querySelector(
            "#num-nights-input-for-overnight-checkbox"
          );

          const overnightCheckboxNumNightsText = StringToIntConverter.Convert(
            overnightCheckboxNumNightsInput.value
          );

          const overnightCheckboxNumPeopleInputText =
            StringToIntConverter.Convert(overnightCheckboxNumPeopleInput.value);

          if (
            !isNaN(overnightCheckboxNumPeopleInputText) &&
            !isNaN(overnightCheckboxNumNightsText)
          )
            CalculateOvernightPriceProcessor.Process();
        });
      }

      const overnightCheckboxNumNightsInput = document.querySelector(
        "#num-nights-input-for-overnight-checkbox"
      );
      if (overnightCheckboxNumNightsInput !== null) {
        overnightCheckboxNumNightsInput.addEventListener("keyup", () => {
          const overnightCheckboxNumPeopleInput = document.querySelector(
            "#num-people-input-for-overnight-checkbox"
          );

          const overnightCheckboxNumPeopleInputText =
            StringToIntConverter.Convert(overnightCheckboxNumPeopleInput.value);

          const overnightCheckboxNumNightsText = StringToIntConverter.Convert(
            overnightCheckboxNumNightsInput.value
          );

          if (
            !isNaN(overnightCheckboxNumPeopleInputText) &&
            !isNaN(overnightCheckboxNumNightsText)
          )
            CalculateOvernightPriceProcessor.Process();
        });
      }
    });
  }
}
