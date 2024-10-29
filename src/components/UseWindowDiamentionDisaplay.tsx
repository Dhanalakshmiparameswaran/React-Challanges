import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import useWindowDimensions from './useWindowDimensions';

const WindowDimensionsDisplay: React.FC = () => {
  const { width, height } = useWindowDimensions();

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Current Window Dimensions
        </Typography>
        <Typography variant="h6">
          Width: {width}px
        </Typography>
        <Typography variant="h6">
          Height: {height}px
        </Typography>
      </Paper>
    </Container>
  );
};

export default WindowDimensionsDisplay;
