import React from 'react';
import { TodoList } from '../todo/components/TodoList';
import AddTodoForm from '../todo/components/AddTodoForm';

const Todos = () => (
  <div>
    <AddTodoForm />
    <TodoList />
  </div>
);

export default Todos;
