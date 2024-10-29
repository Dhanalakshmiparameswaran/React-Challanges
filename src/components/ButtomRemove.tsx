import React, { useState } from 'react';
import Button from '@mui/material/Button'; 
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface ButtonData {
  id: number;
  label: string;
}

const ButtonRemover: React.FC = () => {
  const [buttons, setButtons] = useState<ButtonData[]>([
    { id: 1, label: 'Example Button 1' },
    { id: 2, label: 'Example Button 2' },
    { id: 3, label: 'Example Button 3' },
  ]);

  const removeButton = (id: number) => {
    setButtons(buttons.filter(button => button.id !== id));
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} sx={{ marginTop:'40px'}}> 
        {buttons.map(button => (
          <Box key={button.id}>
            <Button variant="contained" color="primary" onClick={() => removeButton(button.id)}>
              {button.label}
            </Button>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ButtonRemover;
