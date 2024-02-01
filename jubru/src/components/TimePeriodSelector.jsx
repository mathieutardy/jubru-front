import React, { useState } from "react";
import { ButtonGroup, Grid } from "@mui/material";
import TimePeriodButton from "./TimePeriodButton";

const TimePeriodSelector = ({ onTimePeriodChange }) => {
  const [selectedDays, setSelectedDays] = useState(1);

  const handleTimePeriodChange = (days) => {
    setSelectedDays(days);
    onTimePeriodChange(days);
  };

  return (
    <Grid item>
      <ButtonGroup size="small">
        {[1, 5, 30, 365, 365 * 5].map((days) => (
          <TimePeriodButton
            days={days}
            onClick={() => handleTimePeriodChange(days)}
            isSelected={selectedDays === days}
          />
        ))}
      </ButtonGroup>
    </Grid>
  );
};

export default TimePeriodSelector;
