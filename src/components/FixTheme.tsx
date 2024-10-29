import React, { useState } from 'react';
import { ThemeProvider, createTheme, Button, CssBaseline } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const FixTheme: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme); 

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme.palette.mode === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Theme Toggle</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <Button variant="contained" color="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button>
          <Button variant="contained" color="secondary" onClick={() => alert('Thanks The Button Is Clicked!')}>
            Click me!!!
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default FixTheme;
