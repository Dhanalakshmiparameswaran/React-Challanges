import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const FormData: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [age, setAge] = useState<number | ''>('');
  const [submittedName, setSubmittedName] = useState<string>('');
  const [submittedFullName, setSubmittedFullName] = useState<string>('');
  const [submittedAge, setSubmittedAge] = useState<number | ''>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmittedName(name);
    setSubmittedFullName(fullName);
    setSubmittedAge(age === '' ? '' : Number(age));
  };

  return (
    <Box sx={{ width: '300px', margin: '20px auto' }}>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Full Name"
          variant="outlined"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Age"
          variant="outlined"
          type="number"
          value={age}
          onChange={(e) => {
            const value = e.target.value;
            setAge(value === '' ? '' : Number(value)); 
          }}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
      <Box sx={{ marginTop: 3 }}>
        <h2>Submitted Values:</h2>
        <p>Name: {submittedName}</p>
        <p>Full Name: {submittedFullName}</p>
        <p>Age: {submittedAge}</p>
      </Box>
    </Box>
  );
};

export default FormData;
