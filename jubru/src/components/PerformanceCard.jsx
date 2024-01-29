import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PerformanceCard = ({ number, description, title, icon:Icon }) => {
  const theme = useTheme();
  return (
    <Card  style={{color: theme.palette.background.primary }} >
      <CardContent >
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <Icon style={{ fontSize: 60, color: theme.palette.icon.main }}/>
            <Typography variant="h6" color={theme.palette.text.primary}>{title}</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography variant="h4" color={theme.palette.text.primary}s>
              {number !== null ? number : 'Loading...'}
            </Typography>
            <Typography color="textSecondary">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};


export default PerformanceCard;
