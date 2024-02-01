import React, { useState, useEffect } from "react";
import { Grid, Button, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ListTopWorstPerformers from "../components/TopWorstPerformersCard";
import DBPerformanceCards from "../components/DBPerformanceCards";
import TimePeriodSelector from "../components/TimePeriodSelector";
import PortfolioChangeTable from "../components/PortfolioChangeTable";
import {
  fetchTopWorstPerformers,
  fetchValueChange,
  fetchPortfolioValueChange,
  BASE_URL,
  USER_ID,
} from "../utils/apiCalls";

const Dashboard = () => {
  const [data, setData] = useState({
    value_change: 0,
    portfolio_value: 0,
    pct_change: 0,
  });
  const theme = useTheme();
  const [selectedDays, setSelectedDays] = useState(null);
  const [topWorstPerformers, setTopWorstPerformers] = useState([]);
  const [portfolioChange, setPortfolioValueChange] = useState([]);

  const fetchData = async (days) => {
    const valueChangeData = await fetchValueChange(days);
    setData(valueChangeData);
    const fetchedTopWorstPerformers = await fetchTopWorstPerformers(days);
    setTopWorstPerformers(fetchedTopWorstPerformers);
    console.log(topWorstPerformers);
    const fetchedPortfolioValueChange = await fetchPortfolioValueChange(days);
    setPortfolioValueChange(fetchedPortfolioValueChange);
    setSelectedDays(days);
  };

  async function updatePortfolio() {
    try {
      const response = await fetch(
        `${BASE_URL}/update_portfolio?user_id=${USER_ID}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      fetchData(1);
    } catch (error) {
      console.error("Failed to update portfolio:", error);
    }
  }

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <div style={{ marginLeft: 240, marginRight: 100 }}>
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button
            variant="contained"
            onClick={updatePortfolio}
            style={{
              marginBottom: 20,

              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.third,
            }}
          >
            Update Portfolio
          </Button>
        </Grid>
        <TimePeriodSelector onTimePeriodChange={fetchData} />
      </Grid>
      <DBPerformanceCards data={data} selectedDays={selectedDays} />
      <ListTopWorstPerformers topWorstPerformers={topWorstPerformers} />
      <Grid container spacing={6}>
        <Grid item xs={8} md={8}>
          <PortfolioChangeTable rows={portfolioChange} />
        </Grid>
        <Grid item xs={4} md={4}></Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
