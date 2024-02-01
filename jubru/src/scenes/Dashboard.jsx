import React, { useState, useEffect } from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import PerformanceCard from "../components/PerformanceCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PercentIcon from "@mui/icons-material/Percent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useTheme } from "@mui/material/styles";
import TopWorstPerformersCard from "../components/TopWorstPerformersCard";
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
    try {
      const valueChangeData = await fetchValueChange(days);
      setData(valueChangeData);
      const fetchedTopWorstPerformers = await fetchTopWorstPerformers(days);
      setTopWorstPerformers(fetchedTopWorstPerformers);
      const fetchedPortfolioValueChange = await fetchPortfolioValueChange(days);
      setPortfolioValueChange(fetchedPortfolioValueChange);
      console.log(portfolioChange);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

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
      console.log("Portfolio updated");
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
      <Grid container spacing={12}>
        <Grid item xs={12} md={4}>
          <PerformanceCard
            title="Value (€)"
            icon={AccountBalanceWalletIcon}
            number={`${data.portfolio_value}€`}
            description="Total"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PerformanceCard
            title="Change (€)"
            icon={TrendingUpIcon}
            number={`${data.value_change}€`}
            description={`${selectedDays} days change`}
            showArrow={true}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PerformanceCard
            title="Change (%)"
            icon={PercentIcon}
            number={`${data.pct_change}%`}
            description={`${selectedDays} days change`}
            showArrow={true}
          />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        {topWorstPerformers.slice(0, 3).map((position, index) => (
          <Grid item xs={2} key={index}>
            <TopWorstPerformersCard
              ticker={position.ticker}
              priceChange={position.price_change}
            />
          </Grid>
        ))}
        {topWorstPerformers.slice(-3).map((position, index) => (
          <Grid item xs={2} key={index}>
            <TopWorstPerformersCard
              ticker={position.ticker}
              priceChange={position.price_change}
            />
          </Grid>
        ))}
      </Grid>
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
