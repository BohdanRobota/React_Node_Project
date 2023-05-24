import { Button, Stack, Text, Switch } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../types/todo.type';
import { useDeleteTodoQuery } from '../../hooks/useDeleteTodoQuery';
import { useToggleTodoStatusQuery } from '../../hooks/useToggleTodoStatusQuery';
import {
  TodoContainer,
  TodoBtnsContainer,
  TodoTitle,
  TodoDescription,
  TodoContentContainer
} from './TodoItem.styled';
import { useMatchMedia } from '../../../common/hooks/useMatchMedia';

interface TodoItemProps extends ITodo {}
export const TodoItem = ({ id, title, description, isComplete }: TodoItemProps) => {
  const { isMobile } = useMatchMedia();
  const { mutate: deleteTodo } = useDeleteTodoQuery(id);
  const { mutate: toggleStatus } = useToggleTodoStatusQuery();
  const navigate = useNavigate();
  return (
    <TodoContainer isMobile={isMobile}>
      <TodoContentContainer>
        <TodoTitle>
          <Text fontSize="2xl">{title}</Text>
        </TodoTitle>
        <TodoDescription>
          <Text fontSize="xl">{description}</Text>
        </TodoDescription>
      </TodoContentContainer>
      <TodoBtnsContainer>
        <Button colorScheme="teal" size="md" marginRight="20px" onClick={() => deleteTodo()}>
          Delete
        </Button>
        <Button
          colorScheme="teal"
          size="md"
          marginRight="60px"
          onClick={() => navigate(`/todos/${id}`)}
        >
          Open
        </Button>
        <Stack
          direction="row"
          onClick={() => toggleStatus({ id, status: { isComplete: !isComplete } })}
        >
          <Switch colorScheme="teal" size="lg" isChecked={isComplete} />
        </Stack>
      </TodoBtnsContainer>
    </TodoContainer>
  );
};
