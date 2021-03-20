import React from 'react';

import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';

export const ToDoFullComp = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="TaDoContainer">
    <div className="TaDo">
      <Typography component="h1" variant="h2">
        ~Ta Do List~
      </Typography>

      <TodoForm className ="SearchBar"
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />

      <TodoList className ="List" todos={todos} deleteTodo={deleteTodo} />
    </div>
    </div>
  );
};

