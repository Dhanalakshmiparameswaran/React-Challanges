import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const Theme: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', 
    },
  });

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ height: '100vh', padding: 0 }}>
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'background.default',
            color: 'text.primary',
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Welcome to the Theme Toggle
          </Typography>
          <Typography variant="h6">
            Click the button below to switch between light and dark modes.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleThemeToggle}
            sx={{ mt: 2 }}
          >
            Toggle Theme
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Theme;
