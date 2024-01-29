import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from './scenes/global/Sidebar';
import Topbar from './scenes/global/Topbar';
import Dashboard from './components/Dashboard';
// import Transactions from './scenes/global/Transactions';
// import Portfolio from './scenes/global/Portfolio';

const theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF'
    },
    primary: {
      main: '#ADD8E6', // light blue color
      contrastText: '#FFFFFF', // white text on primary color
    },
    text: {
      primary: '#ADD8E6', // light blue text
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Montserrat',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/transactions" element={<Transactions />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;