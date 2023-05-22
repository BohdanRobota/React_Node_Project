import { Checkbox, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../types/todo.type';
import { useDeleteTodoQuery } from '../hooks/useDeleteTodoQuery';
import { useToggleTodoStatusQuery } from '../hooks/useToggleTodoStatusQuery';

interface TodoItemProps extends ITodo {}
export const TodoItem = ({ id, title, description, isComplete }: TodoItemProps) => {
  const { mutate: deleteTodo } = useDeleteTodoQuery(id);
  const { mutate: toggle } = useToggleTodoStatusQuery(id, isComplete);
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <Stack spacing={4} direction="row" onClick={() => toggle()}>
          <Checkbox isChecked={isComplete}>{title}</Checkbox>
        </Stack>
        <div>{description}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => deleteTodo()}>Delete</Button>
        <Button onClick={() => navigate(`/todos/${id}`)}>Open</Button>
      </div>
    </div>
  );
};
