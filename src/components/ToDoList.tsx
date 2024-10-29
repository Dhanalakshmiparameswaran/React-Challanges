import React, { useState } from 'react';
import { Button, TextField, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
      <h1>Todo</h1>
      <TextField
        label="Add Todo"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <div>
        <Button variant="contained" color="primary" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </div>
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
            <ListItemText primary={todo} />
              <IconButton onClick={() => handleRemoveTodo(index)} edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ToDoList;
