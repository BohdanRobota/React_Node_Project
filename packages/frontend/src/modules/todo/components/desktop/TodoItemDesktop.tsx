import { Button, Stack, Switch, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../types/todo.type';
import { useDeleteTodoQuery } from '../../hooks/useDeleteTodoQuery';
import { useToggleTodoStatusQuery } from '../../hooks/useToggleTodoStatusQuery';
import { TodoBtnsContainer } from '../todoItem/TodoItem.styled';
import { Td, Tr } from './TodoListDesctop.styled';

interface TodoItemProps extends ITodo {}
export const TodoItemDesktop = ({ id, title, description, isComplete }: TodoItemProps) => {
  const { mutate: deleteTodo } = useDeleteTodoQuery(id);
  const { mutate: toggleStatus } = useToggleTodoStatusQuery();
  const navigate = useNavigate();
  return (
    <Tr>
      <Td>
        <Text fontSize="xl">{title}</Text>
      </Td>
      <Td>
        <Text fontSize="xl" maxHeight="70px" overflow="auto">
          {description}
        </Text>
      </Td>
      <Td>
        <TodoBtnsContainer>
          <Button colorScheme="teal" size="md" marginRight="30px" onClick={() => deleteTodo()}>
            Delete
          </Button>
          <Button colorScheme="teal" size="md" onClick={() => navigate(`/todos/${id}`)}>
            Open
          </Button>
        </TodoBtnsContainer>
      </Td>
      <Td>
        <Stack
          direction="row"
          onClick={() => toggleStatus({ id, status: { isComplete: !isComplete } })}
        >
          <Switch colorScheme="teal" size="lg" isChecked={isComplete} />
        </Stack>
      </Td>
    </Tr>
  );
};
