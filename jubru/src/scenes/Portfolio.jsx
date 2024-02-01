// Portfolio.js
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import TimePeriodSelector from "../components/TimePeriodSelector";
import PortfolioChangeTable from "../components/PortfolioChangeTable";
import { fetchPortfolioValueChange } from "../utils/apiCalls";

const Portfolio = () => {
  const [rowsPortfolioValue, setPortfolioValueChange] = useState([]);

  const fetchData = async (days) => {
    try {
      const fetchedPortfolioValueChange = await fetchPortfolioValueChange(days);
      setPortfolioValueChange(fetchedPortfolioValueChange);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <Grid container spacing={3} style={{ marginTop: "40px" }}>
      <Grid item xs={12} style={{ textAlign: "right", marginRight: "40px" }}>
        <TimePeriodSelector onTimePeriodChange={fetchData} />
      </Grid>
      <Grid item xs={12} style={{ justifyContent: "center" }}>
        <div
          style={{
            maxWidth: "1500px",
            marginLeft: "200px",
          }}
        >
          <PortfolioChangeTable rows={rowsPortfolioValue} />
        </div>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
