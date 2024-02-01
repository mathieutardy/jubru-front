// Portfolio.js
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import TimePeriodSelector from "../components/TimePeriodSelector";
import PortfolioChangeTable from "../components/PortfolioChangeTable";
import { fetchPortfolioValueChange } from "../utils/apiCalls";

const Portfolio = () => {
  const [days, setDays] = useState(1);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPortfolioValueChange(days);
      if (data) {
        console.log("data", data);
        setRows(data);
      }
    };

    fetchData();
  }, [days]);

  const handleTimePeriodChange = (newDays) => {
    setDays(newDays);
  };

  return (
    <Grid container spacing={3} style={{ marginTop: "40px" }}>
      <Grid item xs={12} mr={4} style={{ textAlign: "right" }}>
        <TimePeriodSelector onTimePeriodChange={handleTimePeriodChange} />
      </Grid>
      <Grid item xs={12} style={{ height: 400, width: "100%" }}>
        <PortfolioChangeTable rows={rows} />
      </Grid>
    </Grid>
  );
};

export default Portfolio;
