import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@mui/material';

const MaxCount: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<number>(10); 
  const [clickCount, setClickCount] = useState<number>(0); 
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); 
    } else {
      setIsActive(false); 
    }
  }, [timeLeft]);

  const handleClick = () => {
    if (isActive) {
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <Typography variant="h4">Click Counter</Typography>
      <Typography variant="h6">Time Left: {timeLeft}s</Typography>
      <Typography variant="h6">Clicks: {clickCount}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        disabled={!isActive} 
        sx={{ marginTop: 2 }}
      >
        Click Me!
      </Button>
      {!isActive && (
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Time's up! You clicked {clickCount} times.
        </Typography>
      )}
    </Box>
  );
};

export default MaxCount;
