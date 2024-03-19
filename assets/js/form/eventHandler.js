import familyMemberRecordsProcessor from "./Processors/familyMemberRecordsProcessor.js";
import familyInfoProcessor from "./Processors/familyInfoProcessor.js";
import onChaletCheckboxClickProcessor from "./Processors/onChaletCheckboxClickProcessor.js";
import onRvCheckboxClickProcessor from "./Processors/onRvCheckboxClickProcessor.js";
import onTentCheckboxClickProcessor from "./Processors/onTentCheckboxClickProcessor.js";
import onSleepOnGroundCheckboxClickProcessor from "./Processors/onSleepOnGroundCheckboxClickProcessor.js";
import onOvernightCheckboxClickProcessor from "./Processors/onOvernightCheckboxClickProcessor.js";
import resetProcessor from "./Processors/resetProcessor.js";
import onDayUseOnlyCheckboxClickProcessor from "./Processors/onDayUseOnlyCheckboxClickProcessor.js";
import calculatePriceForChaletProcessor from "./Processors/calculatePriceForChaletProcessor.js";
import calculatePriceForRvProcessor from "./Processors/calculatePriceForRvProcessor.js";
import calculatePriceForTentProcessor from "./Processors/calculatePriceForTentProcessor.js";
import calculatePriceForDayUseOnlyProcessor from "./Processors/calculatePriceForDayUseOnlyProcessor.js";
import calculateOvernightPriceProcessor from "./Processors/calculateOvernightPriceProcessor.js";
import stringToIntConverter from "./Converters/stringToIntConverter.js";

document.addEventListener("DOMContentLoaded", () => {
  familyInfoProcessor.Process();

  const numPeopleFieldContainer = document.querySelector(
    "#num-people-field-container"
  );
  if (numPeopleFieldContainer !== null) {
    const numPeopleInput =
      numPeopleFieldContainer.querySelector("#num-people-input");
    if (numPeopleInput !== null) {
      numPeopleInput.addEventListener("keyup", () => {
        try {
          familyMemberRecordsProcessor.Process(numPeopleInput.value);
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
      onSleepOnGroundCheckboxClickProcessor.Process();
    });
  }

  chaletCheckboxHandler();
  rvCheckboxHandler();
  tentCheckboxHandler();
  dayUseOnlyCheckboxHandler();
  overnightCheckboxHandler();

  const resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", () => {
    resetProcessor.Process();
  });
});

function chaletCheckboxHandler() {
  const ChaletCheckbox = document.querySelector("#chalet-checkbox");
  if (ChaletCheckbox !== null) {
    ChaletCheckbox.addEventListener("change", () => {
      onChaletCheckboxClickProcessor.Process();

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
              stringToIntConverter.Convert(chaletCheckboxNumPeopleInput.value);

            const chaletCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-chalet-checkbox"
            );

            const chaletCheckboxNumNightsText = stringToIntConverter.Convert(
              chaletCheckboxNumNightsInput.value
            );

            const chaletCheckboxNumBedsInputText = stringToIntConverter.Convert(
              chaletCheckboxNumBedsInput.value
            );
            if (
              !isNaN(chaletCheckboxNumBedsInputText) &&
              !isNaN(chaletCheckboxNumPeopleInputText) &&
              !isNaN(chaletCheckboxNumNightsText)
            )
              calculatePriceForChaletProcessor.Process();
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

            const chaletCheckboxNumNightsText = stringToIntConverter.Convert(
              chaletCheckboxNumNightsInput.value
            );

            const chaletCheckboxNumBedsInput = document.querySelector(
              "#num-beds-input-for-chalet-checkbox"
            );

            const chaletCheckboxNumBedsInputText = stringToIntConverter.Convert(
              chaletCheckboxNumBedsInput.value
            );

            const chaletCheckboxNumPeopleInputText =
              stringToIntConverter.Convert(chaletCheckboxNumPeopleInput.value);

            if (
              !isNaN(chaletCheckboxNumPeopleInputText) &&
              !isNaN(chaletCheckboxNumNightsText) &&
              !isNaN(chaletCheckboxNumBedsInputText)
            )
              calculatePriceForChaletProcessor.Process();
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
            const chaletCheckboxNumBedsInputText = stringToIntConverter.Convert(
              chaletCheckboxNumBedsInput.value
            );

            const chaletCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-chalet-checkbox"
            );

            const chaletCheckboxNumPeopleInputText =
              stringToIntConverter.Convert(chaletCheckboxNumPeopleInput.value);

            const chaletCheckboxNumNightsText = stringToIntConverter.Convert(
              chaletCheckboxNumNightsInput.value
            );

            if (
              !isNaN(chaletCheckboxNumBedsInputText) &&
              !isNaN(chaletCheckboxNumPeopleInputText) &&
              !isNaN(chaletCheckboxNumNightsText)
            )
              calculatePriceForChaletProcessor.Process();
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
      onRvCheckboxClickProcessor.Process();

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

            const rvCheckboxNumPeopleInputText = stringToIntConverter.Convert(
              rvCheckboxNumPeopleInput.value
            );

            const rvCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-rv-checkbox"
            );

            const rvCheckboxNumNightsText = stringToIntConverter.Convert(
              rvCheckboxNumNightsInput.value
            );

            const rvCheckboxNumRvsInputText = stringToIntConverter.Convert(
              rvCheckboxNumRvsInput.value
            );
            if (
              !isNaN(rvCheckboxNumRvsInputText) &&
              !isNaN(rvCheckboxNumPeopleInputText) &&
              !isNaN(rvCheckboxNumNightsText)
            )
              calculatePriceForRvProcessor.Process();
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

            const rvCheckboxNumNightsText = stringToIntConverter.Convert(
              rvCheckboxNumNightsInput.value
            );

            const rvCheckboxNumRvsInput = document.querySelector(
              "#num-rvs-input-for-rv-checkbox"
            );

            const rvCheckboxNumRvsInputText = stringToIntConverter.Convert(
              rvCheckboxNumRvsInput.value
            );

            const rvCheckboxNumPeopleInputText = stringToIntConverter.Convert(
              rvCheckboxNumPeopleInput.value
            );

            if (
              !isNaN(rvCheckboxNumPeopleInputText) &&
              !isNaN(rvCheckboxNumNightsText) &&
              !isNaN(rvCheckboxNumRvsInputText)
            )
              calculatePriceForRvProcessor.Process();
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
            const rvCheckboxNumRvsInputText = stringToIntConverter.Convert(
              rvCheckboxNumRvsInput.value
            );

            const rvCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-rv-checkbox"
            );

            const rvCheckboxNumPeopleInputText = stringToIntConverter.Convert(
              rvCheckboxNumPeopleInput.value
            );

            const rvCheckboxNumNightsText = stringToIntConverter.Convert(
              rvCheckboxNumNightsInput.value
            );

            if (
              !isNaN(rvCheckboxNumRvsInputText) &&
              !isNaN(rvCheckboxNumPeopleInputText) &&
              !isNaN(rvCheckboxNumNightsText)
            )
              calculatePriceForRvProcessor.Process();
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
      onTentCheckboxClickProcessor.Process();

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

            const tentCheckboxNumPeopleInputText = stringToIntConverter.Convert(
              tentCheckboxNumPeopleInput.value
            );

            const tentCheckboxNumNightsInput = document.querySelector(
              "#num-nights-input-for-tent-checkbox"
            );

            const tentCheckboxNumNightsText = stringToIntConverter.Convert(
              tentCheckboxNumNightsInput.value
            );

            const tentCheckboxNumTentsInputText = stringToIntConverter.Convert(
              tentCheckboxNumTentsInput.value
            );
            if (
              !isNaN(tentCheckboxNumTentsInputText) &&
              !isNaN(tentCheckboxNumPeopleInputText) &&
              !isNaN(tentCheckboxNumNightsText)
            )
              calculatePriceForTentProcessor.Process();
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

            const tentCheckboxNumNightsText = stringToIntConverter.Convert(
              tentCheckboxNumNightsInput.value
            );

            const tentCheckboxNumTentsInput = document.querySelector(
              "#num-tents-input-for-tent-checkbox"
            );

            const tentCheckboxNumTentsInputText = stringToIntConverter.Convert(
              tentCheckboxNumTentsInput.value
            );

            const tentCheckboxNumPeopleInputText = stringToIntConverter.Convert(
              tentCheckboxNumPeopleInput.value
            );

            if (
              !isNaN(tentCheckboxNumPeopleInputText) &&
              !isNaN(tentCheckboxNumNightsText) &&
              !isNaN(tentCheckboxNumTentsInputText)
            )
              calculatePriceForTentProcessor.Process();
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
            const tentCheckboxNumTentsInputText = stringToIntConverter.Convert(
              tentCheckboxNumTentsInput.value
            );

            const tentCheckboxNumPeopleInput = document.querySelector(
              "#num-people-input-for-tent-checkbox"
            );

            const tentCheckboxNumPeopleInputText = stringToIntConverter.Convert(
              tentCheckboxNumPeopleInput.value
            );

            const tentCheckboxNumNightsText = stringToIntConverter.Convert(
              tentCheckboxNumNightsInput.value
            );

            if (
              !isNaN(tentCheckboxNumTentsInputText) &&
              !isNaN(tentCheckboxNumPeopleInputText) &&
              !isNaN(tentCheckboxNumNightsText)
            )
              calculatePriceForTentProcessor.Process();
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
      onDayUseOnlyCheckboxClickProcessor.Process();

      const dayUseOnlyCheckboxNumPeopleInput = document.querySelector(
        "#num-people-input-for-day-use-only-checkbox"
      );

      if (dayUseOnlyCheckboxNumPeopleInput !== null) {
        dayUseOnlyCheckboxNumPeopleInput.addEventListener("keyup", () => {
          const dayUseOnlyCheckboxNumNightsInput = document.querySelector(
            "#num-days-input-for-day-use-only-checkbox"
          );

          const dayUseOnlyCheckboxNumNightsText = stringToIntConverter.Convert(
            dayUseOnlyCheckboxNumNightsInput.value
          );

          const dayUseOnlyCheckboxNumPeopleInputText =
            stringToIntConverter.Convert(
              dayUseOnlyCheckboxNumPeopleInput.value
            );

          if (
            !isNaN(dayUseOnlyCheckboxNumPeopleInputText) &&
            !isNaN(dayUseOnlyCheckboxNumNightsText)
          )
            calculatePriceForDayUseOnlyProcessor.Process();
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
            stringToIntConverter.Convert(
              dayUseOnlyCheckboxNumPeopleInput.value
            );

          const dayUseOnlyCheckboxNumNightsText = stringToIntConverter.Convert(
            dayUseOnlyCheckboxNumNightsInput.value
          );

          if (
            !isNaN(dayUseOnlyCheckboxNumPeopleInputText) &&
            !isNaN(dayUseOnlyCheckboxNumNightsText)
          )
            calculatePriceForDayUseOnlyProcessor.Process();
        });
      }
    });
  }
}

function overnightCheckboxHandler() {
  const overnightCheckbox = document.querySelector("#overnight-checkbox");

  if (overnightCheckbox !== null) {
    overnightCheckbox.addEventListener("change", () => {
      onOvernightCheckboxClickProcessor.Process();

      const overnightCheckboxNumPeopleInput = document.querySelector(
        "#num-people-input-for-overnight-checkbox"
      );

      if (overnightCheckboxNumPeopleInput !== null) {
        overnightCheckboxNumPeopleInput.addEventListener("keyup", () => {
          const overnightCheckboxNumNightsInput = document.querySelector(
            "#num-nights-input-for-overnight-checkbox"
          );

          const overnightCheckboxNumNightsText = stringToIntConverter.Convert(
            overnightCheckboxNumNightsInput.value
          );

          const overnightCheckboxNumPeopleInputText =
            stringToIntConverter.Convert(overnightCheckboxNumPeopleInput.value);

          if (
            !isNaN(overnightCheckboxNumPeopleInputText) &&
            !isNaN(overnightCheckboxNumNightsText)
          )
            calculateOvernightPriceProcessor.Process();
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
            stringToIntConverter.Convert(overnightCheckboxNumPeopleInput.value);

          const overnightCheckboxNumNightsText = stringToIntConverter.Convert(
            overnightCheckboxNumNightsInput.value
          );

          if (
            !isNaN(overnightCheckboxNumPeopleInputText) &&
            !isNaN(overnightCheckboxNumNightsText)
          )
            calculateOvernightPriceProcessor.Process();
        });
      }
    });
  }
}
