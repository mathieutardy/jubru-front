import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const PerformanceCard = ({ number, description, title, icon: Icon, showArrow = false }) => {
  const theme = useTheme();

  const getNumberColor = () => {
    if (showArrow) {
      if (number > 0) {
        return 'green';
      } else if (number < 0) {
        return 'red';
      }
    }
    return theme.palette.text.primary;
  };

  const renderArrow = () => {
    const arrowStyle = { verticalAlign: 'middle', fontSize: '1em', marginRight: '5px' };
    if (number > 0) {
      return <ArrowUpwardIcon style={{ ...arrowStyle, color: 'green' }} />;
    } else if (number < 0) {
      return <ArrowDownwardIcon style={{ ...arrowStyle, color: 'red' }} />;
    }
    return null;
  };

  return (
    <Card style={{ color: theme.palette.background.primary }} >
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6}>
            <Icon style={{ fontSize: 60, color: theme.palette.icon.main }} />
            <Typography variant="h6" color={theme.palette.text.primary}>{title}</Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: 'right' }}>
            <Typography variant="h4" color={getNumberColor()} component="span">
              {showArrow && renderArrow()}
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
