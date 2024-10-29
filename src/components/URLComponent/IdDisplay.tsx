import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const IdDisplay: React.FC = () => {
  const { id } = useParams<{ id: string }>();

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
        ID Display
      </Typography>
      <Typography variant="h5" color="secondary">
        Ids: {id}
      </Typography>
    </Box>
    </div>
    </>
  );
};
export default IdDisplay;