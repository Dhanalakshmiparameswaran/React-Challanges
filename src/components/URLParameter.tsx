import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

const URL: React.FC = () => {
  const navigate = useNavigate();

  const goToRam = () => {
    navigate('/Ram');
  };

  const goToId = () => {
    navigate('/ids/1');
  };

  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Navigate to Routes
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={goToRam} 
        sx={{ mr: 2 }}
      >
        Go to Student Ram
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={goToId}
      >
        Go to Ids 1
      </Button>
      <hr style={{ marginTop: '20px', width: '80%' }} />
    </Box>
  );
};

export default URL;
