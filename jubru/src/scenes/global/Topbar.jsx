import React from 'react';
import { Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Topbar = ({ theme, toggleTheme }) => {
  return (
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        My TopBar
      </Typography>
      <IconButton onClick={toggleTheme} color="inherit">
        {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Toolbar>
  );
};

export default Topbar;