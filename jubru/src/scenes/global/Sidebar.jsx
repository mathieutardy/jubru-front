import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Divider, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PieChartIcon from '@mui/icons-material/PieChart';
import LogoIcon from '../../assets/icon.png';


const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Box display="flex" alignItems="center" padding={2}>
        <img src={LogoIcon} alt="JuBru Icon" style={{ marginRight: 8, width: 30, height: 30 }} />
        <Typography variant="h6">JuBru</Typography>
      </Box>
      <Divider />
      <List>
        {['Dashboard', 'Transactions', 'Portfolio'].map((text, index) => (
          <ListItem key={text}>
            <ListItemIcon>
              {index === 0 ? <DashboardIcon /> : index === 1 ? <AccountBalanceWalletIcon /> : <PieChartIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;