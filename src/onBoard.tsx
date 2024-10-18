import { Button } from "@mui/material";
import React from "react";
import './App.css'

const OnBoard: React.FC = () => {
  return (
    <>
    <div className="titleTag">React Challanges</div>
    <div className="container">
    <Button variant="contained">Hide/Show Text</Button>
    <Button variant="contained">Stop Watch</Button>      
    <Button variant="contained">Todo List</Button>      
    <Button variant="contained">Progress Bar</Button>      
    <Button variant="contained">Max Count</Button>      
    <Button variant="contained">ReactLazy Load</Button>      
    <Button variant="contained">Navigate</Button> 
    <Button variant="contained">URL Parameter</Button>           
    <Button variant="contained">Catch Route</Button>      
    </div>
    </>
  );
};

export default OnBoard;
