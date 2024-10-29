import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const App: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const getCurrentPage = () => {
        switch (location.pathname) {
            case '/home':
                return "Welcome to the Home Page";
            case '/newsletters':
                return "Welcome to the Newsletters Page";
            case '/dashboard':
                return "Welcome to the Dashboard Page";
            default:
                return "Welcome to the App";
        }
    };
  
    const handleHome = () => {
      navigate("/home");
    };
    const handleNewsletters = () => {
      navigate("/newsletters");
    };
    const handleDashboard = () => {
      navigate("/dashboard");
    };
  
    return (
      <>
      <div style={{ border: '2px solid black', padding: '20px', borderRadius: '8px',margin:'20px'}}>
        <h1 style={{ padding: 0 ,margin:'40px',textAlign:"center"}}>{getCurrentPage()}</h1> 
        
        <ul style={{ padding: 0, textAlign:"center", listStyleType: 'none'}}>
          <li style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={handleHome}>
            Home
          </li>
          <li style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={handleNewsletters}>
            Newsletters
          </li>
          <li style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={handleDashboard}>
            Dashboard
          </li>
        </ul>
        </div>
      </>
    );
};

export default App;
