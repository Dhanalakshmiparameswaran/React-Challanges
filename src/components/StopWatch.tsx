import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "../App.css";

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div>
      <div className="titleTag">
        <h1>{formatTime(time)}</h1>
        <Button variant="contained" onClick={handleStart} disabled={isRunning}  style={{ marginRight: "20px" }}>
          Start
        </Button>
        <Button variant="contained" onClick={handleStop} disabled={!isRunning}  style={{ marginRight: "20px" }}>
          Stop
        </Button>
        <Button variant="contained" onClick={handleReset}  style={{ marginRight: "20px" }}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Stopwatch;
