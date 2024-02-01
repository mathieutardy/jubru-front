import React from 'react';
import { Button, useTheme } from '@mui/material';

const TimePeriodButton = ({ days, onClick, isSelected }) => {
  const theme = useTheme();

  const buttonStyle = isSelected 
    ? { 
        backgroundColor: theme.palette.background.primary, // or any other theme property you want to use
        fontWeight: 'bold'
      } 
    : null;

  return (
    <Button
      onClick={() => onClick(days)}
      style={buttonStyle}
    >
      {days === 1 ? '1 Day' : 
       days === 5 ? '5 Days' : 
       days === 30 ? '1 Month' : 
       days === 365 ? '1 Year' : '5 Years'}
    </Button>
  );
};

export default TimePeriodButton;