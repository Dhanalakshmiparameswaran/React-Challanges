import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Result: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        width: 400,
        margin: 'auto', 
        padding: 3, 
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 2, 
        mt: 4, 
        textAlign: 'center'
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Results
      </Typography>
      <Typography variant="body1" gutterBottom>
        Your form has been submitted successfully!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleBack}>
        Go Back
      </Button>
    </Box>
  );
};

export default Result;
