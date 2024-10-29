import React, { useState } from "react";
import { Container, Typography, Button, Box, Card, CardContent } from "@mui/material"; 
import usePageBottom from "./UsePageButtom";

const TaskList: React.FC = () => {
  const reachedBottom = usePageBottom();
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: false },
    { id: 3, title: "Study Hooks", completed: false },
    { id: 4, title: "API Content", completed: false },
    { id: 5, title: "Explore React Router", completed: false },
    { id: 6, title: "HTML5 ,CSS3", completed: false },
    { id: 7, title: "Test Your Knowledage", completed: false },
    { id: 8, title: "Read Documentation", completed: false },
    { id: 9, title: "Practice Coding", completed: false },
    { id: 10, title: "Build Projects", completed: false }
  ]);

  const toggleTaskCompletion = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Container sx={{ height: "200vh", paddingTop: "20px" }}>
      <Typography variant="h4" gutterBottom style={{textAlign:'center'}}>
        Task List
      </Typography>
      {tasks.map((task) => (
        <Box key={task.id} display="flex" justifyContent="center" marginBottom={2}>
          <Card sx={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', padding: 1 }}>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  textDecoration: task.completed ? "line-through" : "none",
                  marginBottom: 1
                }}
              >
                {task.title}
              </Typography>
              <Button
                variant="contained"
                onClick={() => toggleTaskCompletion(task.id)}
                color={task.completed ? "secondary" : "primary"}
              >
                {task.completed ? "Undo" : "Complete"}
              </Button>
            </CardContent>
          </Card>
        </Box>
      ))}
      {reachedBottom && (
        <Typography variant="h6" color="primary" textAlign="center" marginTop={2}>
          You have reached the bottom of the page!
        </Typography>
      )}
      <footer style={{ marginTop: "20px", textAlign: "center" }}>&copy; React challenges</footer>
    </Container>
  );
};

export default TaskList;
