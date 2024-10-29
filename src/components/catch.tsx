import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
      <Box>
        <Typography variant="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Oops! The page you are looking for does not exist.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
