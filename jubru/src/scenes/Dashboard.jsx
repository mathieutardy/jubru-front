import React, { useState, useEffect } from "react";
import { Grid, Button, ButtonGroup } from "@mui/material";
import PerformanceCard from "../components/PerformanceCard";
import TimePeriodButton from "../components/TimePeriodButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PercentIcon from "@mui/icons-material/Percent";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useTheme } from "@mui/material/styles";
import TopWorstPerformersCard from "../components/TopWorstPerformersCard";
import {
  fetchPositionsChange,
  fetchValueChange,
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
  const [lastClicked, setLastClicked] = useState(null);
  const [selectedDays, setSelectedDays] = useState(null);
  const [positions, setPositions] = useState([]);

  const fetchPositionsForDays = async (days) => {
    const fetchedPositions = await fetchPositionsChange(days);
    setPositions(fetchedPositions);
  };

  // Function to fetch data and set state
  const fetchDataForDays = (days) => {
    fetchValueChange(days).then((data) => setData(data));
    setLastClicked(days);
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
      fetchDataForDays(5); // Fetch new data after update
    } catch (error) {
      console.error("Failed to update portfolio:", error);
    }
  }

  // Initial data fetch
  useEffect(() => {
    fetchDataForDays(1);
    fetchPositionsForDays(1);
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
        <Grid item>
          <ButtonGroup size="small">
            <TimePeriodButton
              days={1}
              onClick={fetchDataForDays}
              isSelected={lastClicked === 1}
            />
            <TimePeriodButton
              days={5}
              onClick={fetchDataForDays}
              isSelected={lastClicked === 5}
            />
            <TimePeriodButton
              days={30}
              onClick={fetchDataForDays}
              isSelected={lastClicked === 30}
            />
            <TimePeriodButton
              days={365}
              onClick={fetchDataForDays}
              isSelected={lastClicked === 365}
            />
            <TimePeriodButton
              days={365 * 5}
              onClick={fetchDataForDays}
              isSelected={lastClicked === 365 * 5}
            />
          </ButtonGroup>
        </Grid>
      </Grid>
      <Grid container spacing={12}>
        <Grid item xs={12} md={4}>
          <PerformanceCard
            title="Value (€)"
            icon={AccountBalanceWalletIcon}
            number={data.portfolio_value}
            description="Total (€)"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PerformanceCard
            title="Change (€)"
            icon={TrendingUpIcon}
            number={data.value_change}
            description={`${selectedDays} days change (€)`}
            showArrow={true}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <PerformanceCard
            title="Change (%)"
            icon={PercentIcon}
            number={data.pct_change}
            description={`${selectedDays} days change (%)`}
            showArrow={true}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {positions.slice(0, 3).map((position, index) => (
          <Grid item xs={2} key={index}>
            <TopWorstPerformersCard
              ticker={position.ticker}
              priceChange={position.price_change}
              isTopPerformer={true}
            />
          </Grid>
        ))}
        {positions.slice(-3).map((position, index) => (
          <Grid item xs={2} key={index}>
            <TopWorstPerformersCard
              ticker={position.ticker}
              priceChange={position.price_change}
              isTopPerformer={false}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
