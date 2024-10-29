import React, { useState, useEffect } from 'react';
import { TextField, Typography, Box } from '@mui/material';

const CounterComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    if (inputValue) {
      setCount(prevCount => prevCount + 1);
    }
  }, [inputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 ,marginTop:'20px'}}>
      <TextField
        label="Type something here..."
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Typography variant="h6">Count: {count}</Typography>
    </Box>
  );
};

export default CounterComponent;
