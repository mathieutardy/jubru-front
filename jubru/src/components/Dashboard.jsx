import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import PerformanceCard from './PerformanceCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

async function fetchYourApi() {
  try {
    const response = await fetch('http://127.0.0.1:8000/read_user_portfolio_value?user_id=1');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}

const Dashboard = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    fetchYourApi().then(data => setData1(data));

    fetchYourApi().then(data => setData2(data));
  }, []);

  async function updatePortfolio() {
    try {
      const response = await fetch('http://127.0.0.1:8000/update_portfolio');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      // Handle the response here. For example, you might want to refetch portfolio data
      console.log("Portfolio updated");
      fetchYourApi().then(data => setData1(data));
      fetchYourApi().then(data => setData2(data));
    } catch (error) {
      console.error("Failed to update portfolio:", error);
    }
  }

  return (
    <div style={{ marginLeft: 240, marginRight: 100}}>
      <Button 
      variant="contained" 
      onClick={updatePortfolio} 
      style={{ marginBottom: 20 }}
      >
      Update Portfolio
      </Button>
      <Grid container spacing={12}>
        <Grid item xs={12} md={6}>
          <PerformanceCard title="Value" icon={AccountBalanceWalletIcon} number={data1 ? data1: null} description="Portfolio value change (EUR)" />
        </Grid>
        <Grid item xs={12} md={6}>
          <PerformanceCard title="Change" icon={TrendingUpIcon} number={data1 ? data1: null} description="Portfolio value change (%)" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

