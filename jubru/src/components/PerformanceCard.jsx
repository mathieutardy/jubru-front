// DataCard.js
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PerformanceCard = ({ title, number, description }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="h4">
          {number !== null ? number : 'Loading...'}
        </Typography>
        <Typography color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
