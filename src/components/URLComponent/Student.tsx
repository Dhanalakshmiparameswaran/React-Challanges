import React from 'react';
import { Typography, Box } from '@mui/material';

interface StudentProps {
  name: string;
}

const Student: React.FC<StudentProps> = ({ name }) => {
  return (
    <>
    <div style={{ margin:'20px'}}>
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 2,
        maxWidth: 400,
        margin: 'auto',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Student:
      </Typography>
      <Typography variant="h5" color="primary">
        {name}
      </Typography>
    </Box>
    </div>
    </>
  );
};

export default Student;
