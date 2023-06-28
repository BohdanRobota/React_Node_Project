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
import { RouteNames } from '../../../common/consts/app-keys.const';

interface TodoItemProps extends ITodo {}
export const TodoItem = ({ id, title, description, isComplete }: TodoItemProps) => {
  const { isMobile, isDesktop } = useMatchMedia();
  const { mutate: deleteTodo } = useDeleteTodoQuery(id);
  const { mutate: toggleStatus } = useToggleTodoStatusQuery();
  const navigate = useNavigate();
  const deleteTodoHandler = () => {
    deleteTodo();
  };
  const toggleStatusHandler = () => {
    toggleStatus({ id, status: { isComplete: !isComplete } });
  };
  const openTodoHandler = () => {
    navigate(RouteNames.OPEN_TODO + id);
  };
  return (
    <TodoContainer isMobile={isMobile} isDesktop={isDesktop}>
      <TodoContentContainer>
        <TodoTitle>
          <Text fontSize="2xl">{title}</Text>
        </TodoTitle>
        <TodoDescription>
          <Text fontSize="xl">{description}</Text>
        </TodoDescription>
      </TodoContentContainer>
      <TodoBtnsContainer>
        <Button colorScheme="teal" size="md" marginRight="20px" onClick={deleteTodoHandler}>
          Delete
        </Button>
        <Button colorScheme="teal" size="md" marginRight="60px" onClick={openTodoHandler}>
          Open
        </Button>
        <Stack direction="row" onClick={toggleStatusHandler}>
          <Switch colorScheme="teal" size="lg" isChecked={isComplete} />
        </Stack>
      </TodoBtnsContainer>
    </TodoContainer>
  );
};
