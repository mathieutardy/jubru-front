import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const PerformanceCard = ({
  number,
  description,
  title,
  icon: Icon,
  showArrow = false,
}) => {
  const theme = useTheme();

  const getNumberColor = () => {
    if (showArrow) {
      if (number > 0) {
        return theme.palette.icon.green;
      } else if (number < 0) {
        return theme.palette.icon.red;
      }
    }
    return theme.palette.text.primary;
  };

  const renderArrow = () => {
    const arrowStyle = {
      verticalAlign: "middle",
      fontSize: "1em",
      marginRight: "5px",
    };
    if (number > 0) {
      return (
        <ArrowUpwardIcon
          style={{ ...arrowStyle, color: theme.palette.icon.green }}
        />
      );
    } else if (number < 0) {
      return (
        <ArrowDownwardIcon
          style={{ ...arrowStyle, color: theme.palette.icon.red }}
        />
      );
    }
    return null;
  };

  return (
    <Card style={{ color: theme.palette.background.primary }}>
      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                borderRadius: "50%",
                width: "70px",
                height: "70px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.palette.background.third,
              }}
            >
              <Icon style={{ fontSize: 60, color: theme.palette.icon.main }} />
            </div>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography variant="h4" color={getNumberColor()} component="span">
              {showArrow && renderArrow()}
              {number !== null ? number : "Loading..."}
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "left" }}>
            <Typography variant="h6" color={theme.palette.text.primary}>
              {title}
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Typography color="textSecondary">{description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PerformanceCard;
