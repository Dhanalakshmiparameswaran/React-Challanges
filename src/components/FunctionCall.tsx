import React, { useState } from "react";
import { Button, Box } from "@mui/material"; 

const functionsCounter = new Set();

const FunctionCalled = (increment: unknown, decrement: unknown, incrementOtherCounter: unknown) => {
  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);
  console.log(functionsCounter.size);
};

export default function UnnecessaryCall() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false); 

  const increment = () => {
    if (isProcessing) return; 
    setIsProcessing(true); 
    setCounter(prevCounter => {
      FunctionCalled(increment, decrement, incrementOtherCounter);
      console.log("Inc");
      return prevCounter + 1;
    });
    setIsProcessing(false); 
  };

  const decrement = () => {
    if (isProcessing) return; 
    setIsProcessing(true); 
    setCounter(prevCounter => {
      FunctionCalled(increment, decrement, incrementOtherCounter);
      return prevCounter - 1;
    });
    setIsProcessing(false); 
  };

  const incrementOtherCounter = () => {
    if (isProcessing) return; 
    setIsProcessing(true);
    setOtherCounter(prevOtherCounter => {
      FunctionCalled(increment, decrement, incrementOtherCounter);
      return prevOtherCounter + 1; 
    });
    setIsProcessing(false);
  };

  return (
    <Box className="App" textAlign="center" sx={{ padding: 2 }}>
      <h1>
        <code>Counter </code>
      </h1>
      <h3>Counter Value: {counter}</h3>
      <h3>Other Counter Value: {otherCounter}</h3>
      <h3>{`No of function calls: ${functionsCounter.size}`}</h3>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        sx={{ marginTop: 2 }} 
      >
        <Button 
          variant="contained" 
          color="primary" 
          onClick={decrement} 
          sx={{ marginBottom: 1 }} 
          disabled={isProcessing}
        >
          Decrement -
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={increment} 
          sx={{ marginBottom: 1 }} 
          disabled={isProcessing} 
        >
          Increment +
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={incrementOtherCounter}
          disabled={isProcessing} 
        >
          Increment Other Counter +
        </Button>
      </Box>
    </Box>
  );
}
