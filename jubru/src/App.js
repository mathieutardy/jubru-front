import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Dashboard from './scenes/Dashboard';
import MyPortfolio from './components/MyPortfolio';
import { CssBaseline } from "@mui/material";


const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
  };
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Topbar theme = {mode} toggleTheme={toggleMode} />
          <Sidebar/>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/portfolio" element={<MyPortfolio/>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
