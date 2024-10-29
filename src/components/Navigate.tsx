import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputName, setInputName] = useState('');
  const [error, setError] = useState({ name: '', feedback: '' });
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid = true;

    setError({ name: '', feedback: '' });

    if (!inputName) {
      setError((prev) => ({ ...prev, name: 'Name is required' }));
      isValid = false;
    }

    if (!inputValue) {
      setError((prev) => ({ ...prev, feedback: 'Feedback is required' }));
      isValid = false;
    }

    if (isValid) {
      navigate('/Result');
    }
  };

  return (
    <Box
      sx={{
        width: 300,
        margin: 'auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 2,
        mt: 4,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Feedback Form
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="nameField"
          label="Enter Your Name"
          variant="outlined"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          sx={{ mb: 2 }}
          error={Boolean(error.name)}
          helperText={error.name} 
        />
        <TextField
          fullWidth
          id="feedbackField"
          label="Enter Your Feedback"
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{ mb: 2 }}
          error={Boolean(error.feedback)}
          helperText={error.feedback}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
