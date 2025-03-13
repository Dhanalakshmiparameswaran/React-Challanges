import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

const OnBoard: React.FC = () => {
  const navigate = useNavigate();

  const handleHideShowText = () => {
    navigate("/ShowandHideText");
  };
  const handleStopWatch = () => {
    navigate("/StopWatch");
  };
  const handleToDoList = () => {
    navigate("/ToDoList");
  };
  const handleProgrssBar = () => {
    navigate("/ProgressBar");
  };
  const handleFormData = () => {
    navigate("/FormData");
  };
  const handleMaxCount = () => {
    navigate("/MaxCount");
  };
  const handleLazy = () => {
    navigate("/Lazy");
  };
  const handleNavigate = () => {
    navigate("/Navigate");
  };
  const handleURL = () => {
    navigate("/URL");
  };
  const HandleUsePageButtom = () => {
    navigate("/TaskList");
  };
  const handleDiamention = () => {
    navigate("/WindowDimensionsDisplay");
  };
  const handleFetch = () => {
    navigate("/UseFetch");
  };
  const handleTheme = () => {
    navigate("/Theme");
  };
  const handleButtonRemover=()=>{
    navigate("/ButtonRemover")
  }
  const handleFixTheme=()=>{
    navigate("/FixTheme")
  }
  const handleUnNeccessaryCall=()=>{
    navigate("/UnNeccessaryCall")
  }
  const handleCalculation=()=>{
    navigate("/Calculation")
  }
  const handleRerender=()=>{
    navigate("/Rerender")
  }

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Hooks
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" onClick={handleHideShowText}>
            Hide/Show Text
          </Button>
          <Button variant="contained" onClick={handleStopWatch}>
            Stop Watch
          </Button>
          <Button variant="contained" onClick={handleToDoList}>
            Todo List
          </Button>
          <Button variant="contained" onClick={handleProgrssBar}>
            Progress Bar
          </Button>
          <Button variant="contained" onClick={handleFormData}>
            Form Data
          </Button>
          <Button variant="contained" onClick={handleMaxCount}>
            Max Count
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Router
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" onClick={handleLazy}>
            ReactLazy Load
          </Button>
          <Button variant="contained" onClick={handleNavigate}>
            Navigate
          </Button>
          <Button variant="contained" onClick={handleURL}>
            URL Parameter
          </Button>
          <Button variant="contained" onClick={handleNavigate}>
            Catch Route
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Custom Hooks
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" onClick={HandleUsePageButtom}>
            UsePage Buttom
          </Button>
          <Button variant="contained" onClick={handleDiamention}>
            Use Window Diamention
          </Button>
          <Button variant="contained" onClick={handleFetch}>
            Use Fetch
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Context API
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" onClick={handleTheme}>
            Fix Theme
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Debugging
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Button variant="contained" onClick={handleButtonRemover}>
            Remove specific button
          </Button>
          <Button variant="contained" onClick={handleFixTheme}>
            fix theme
          </Button>
          <Button variant="contained" onClick={handleUnNeccessaryCall}>
            fix unneccessary function call
          </Button>
          <Button variant="contained" onClick={handleCalculation}>
           fix unneccessary calculation
          </Button>
          <Button variant="contained" onClick={handleRerender}>
            find Rerender
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OnBoard;
