import React, { useState, useMemo } from 'react';
import { TextField, Button, Typography } from '@mui/material';

const factorialOf = (n: number): number => {
  if (n < 0) return 0; 
  return n === 0 || n === 1 ? 1 : n * factorialOf(n - 1);
};

const CalculateFactorial: React.FC = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [inc, setInc] = useState<number>(0);

  const factorialResult = useMemo(() => {
    console.log('factorialOf(n) called!');
    return factorialOf(inputValue);
  }, [inputValue]); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setInputValue(isNaN(value) ? 0 : value); 
  };

  const handleReRender = () => {
    setInc(prevInc => prevInc + 1); 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px' }}>
      <TextField
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        label="Enter a number"
        variant="outlined"
        style={{ marginBottom: '20px' }} 
      />
      <Button variant="contained" onClick={handleReRender} style={{ marginBottom: '20px' }}>
        Re-render
      </Button>
      <Typography variant="h6">
        Factorial of {inputValue} is {factorialResult}
      </Typography>
      <Typography variant="body1" style={{ marginTop: '20px' }}>
        Re-render count: {inc}
      </Typography>
    </div>
  );
};

export default CalculateFactorial;
