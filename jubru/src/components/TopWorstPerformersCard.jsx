import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { green, red } from "../theme";
import { useTheme } from "@mui/material/styles";

const TopWorstPerformersCard = ({ ticker, priceChange }) => {
  const getColor = () => {
    if (priceChange > 1) return green[500];
    if (priceChange > 0.5) return green[300];
    if (priceChange > 0) return green[100];
    if (priceChange < -3) return red[700];
    if (priceChange < -1) return red[300];
    return red[100];
  };

  const theme = useTheme();

  const cardStyle = {
    backgroundColor: getColor(),
    marginTop: "30px",
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

export default TopWorstPerformersCard;
