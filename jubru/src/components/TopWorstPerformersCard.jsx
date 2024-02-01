// PositionCard.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const TopWorstPerformersCard = ({ ticker, priceChange, isTopPerformer }) => {
  const cardStyle = {
    backgroundColor: isTopPerformer ? "lightgreen" : "lightcoral", // Different shades based on performance
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h5">{ticker}</Typography>
        <Typography variant="body2">{priceChange}</Typography>
      </CardContent>
    </Card>
  );
};

export default TopWorstPerformersCard;
