import React from 'react';
import {
  Container,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Box
} from '@mui/material';
import useFetchMethod from './UseFetchMethod';

const FetchData: React.FC = () => {
  const { data, loading, error } = useFetchMethod('https://dummyjson.com/todos');

  if (loading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" minHeight="100vh">
          <CircularProgress />
          <Typography variant="h6" marginTop={2}>
            Loading data...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Todo List
      </Typography>
      <List>
        {data.todos.map((todo: { id: number; todo: string; completed: boolean }) => (
          <ListItem key={todo.id}>
            <ListItemText
              primary={todo.todo}
              secondary={todo.completed ? "Completed" : "Pending"}
              sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
      <footer style={{ marginTop: "20px", textAlign: 'center' }}>&copy;React challenges</footer>
    </Container>
  );
};

export default FetchData;
