import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import PerformanceCard from './PerformanceCard';


const drawerWidth = 240

const Dashboard = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  // Example API calls (replace with your actual API calls)
  useEffect(() => {
    // Fetch data for first box
    fetchYourApi1().then(data => setData1(data));

    // Fetch data for second box
    fetchYourApi2().then(data => setData2(data));

    // Fetch data for third box
    fetchYourApi3().then(data => setData3(data));
  }, []);

  return (
    <div style={{ marginLeft: drawerWidth, marginRight: 100 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <PerformanceCard title="Card 1" number={data1 ? data1.number : null} description="This is card 1 description" />
        </Grid>
        <Grid item xs={12} md={4}>
          <PerformanceCard title="Card 2" number={data2 ? data2.number : null} description="This is card 2 description" />
        </Grid>
        <Grid item xs={12} md={4}>
          <PerformanceCard title="Card 3" number={data3 ? data3.number : null} description="This is card 3 description" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;

// Replace these with your actual API call functions
async function fetchYourApi1() {
  // Fetch data from API and return
}

async function fetchYourApi2() {
  // Fetch data from API and return
}

async function fetchYourApi3() {
  // Fetch data from API and return
}
