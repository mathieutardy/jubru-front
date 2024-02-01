import React from "react";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { green, red } from "../theme";
import { useTheme } from "@mui/material/styles";

const TopWorstPerformersCard = ({ ticker, priceChange }) => {
  const getColor = () => {
    if (priceChange > 1) return green[500];
    if (priceChange > 0.5) return green[400];
    if (priceChange > 0) return green[300];
    if (priceChange < -3) return red[700];
    if (priceChange < -1) return red[600];
    return red[100];
  };

  const theme = useTheme();

  const cardStyle = {
    backgroundColor: getColor(),
    marginTop: "10px",
    color: theme.palette.text.blackwhite,
  };
  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h7">{ticker}</Typography>
        <Typography variant="h4">{priceChange}%</Typography>
      </CardContent>
    </Card>
  );
};

const ListTopWorstPerformers = ({ topWorstPerformers }) => {
  const theme = useTheme();
  console.log(topWorstPerformers);

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <Box
          style={{
            backgroundColor: theme.palette.background.primary,
            padding: "10px",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <Typography style={{ color: theme.palette.text.primary }}>
            Top Performers
          </Typography>
          <Grid container spacing={2}>
            {topWorstPerformers.slice(0, 3).map((position, index) => (
              <Grid item xs={4} key={index}>
                <TopWorstPerformersCard
                  ticker={position.ticker}
                  priceChange={position.price_change}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          style={{
            backgroundColor: theme.palette.background.primary,
            padding: "10px",
            marginTop: "30px",
          }}
        >
          <Typography style={{ color: theme.palette.text.primary }}>
            Worst Performers
          </Typography>
          <Grid container spacing={2}>
            {topWorstPerformers.slice(-3).map((position, index) => (
              <Grid item xs={4} key={index}>
                <TopWorstPerformersCard
                  ticker={position.ticker}
                  priceChange={position.price_change}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ListTopWorstPerformers;
