import React, { useState } from 'react';
import { TextField, Button, LinearProgress, Box } from '@mui/material';

const ProgressBar: React.FC = () => {
  const [percentage, setPercentage] = useState<number>(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 0 && value <= 100) {
      setPercentage(value);
    } else {
      setPercentage(0);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, margin: '20px auto' }}>
      <h1>Progress Bar</h1>
      <TextField
        label="Enter Percentage"
        variant="outlined"
        onChange={handleInputChange}
        sx={{ marginBottom: 2 }}
      />
      <LinearProgress variant="determinate" value={percentage} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 1 }}>
        <span>{percentage}%</span>
        <Button variant="contained" color="primary" onClick={() => setPercentage(0)}>
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default ProgressBar;
