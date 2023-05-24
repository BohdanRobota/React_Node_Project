import { Button, Stack, Text, Switch } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../types/todo.type';
import { useToggleTodoStatusQuery } from '../../hooks/useToggleTodoStatusQuery';
import { RouteNames } from '../../../common/consts/app-keys.const';
import {
  TodoContainer,
  TodoBtnsContainer,
  TodoTitle,
  TodoDescription
} from '../todoItem/TodoItem.styled';
import { CheckedContainer } from './TodoItemOpen.styled';
import { useMatchMedia } from '../../../common/hooks/useMatchMedia';

interface TodoItemProps extends ITodo {}
export const TodoItemOpen = ({ id, title, description, isComplete, isPrivate }: TodoItemProps) => {
  const { isMobile } = useMatchMedia();
  const { mutate: toggleStatus } = useToggleTodoStatusQuery();
  const navigate = useNavigate();
  const isCompleteConst = 'isComplete';
  const handlerToggleEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget.id === isCompleteConst) {
      toggleStatus({ id, status: { isComplete: !isComplete } });
    } else {
      toggleStatus({ id, status: { isPrivate: !isPrivate } });
    }
  };
  return (
    <TodoContainer isMobile={isMobile}>
      <TodoTitle>
        <Text fontSize="2xl">{title}</Text>
      </TodoTitle>
      <TodoDescription>
        <Text fontSize="xl">{description}</Text>
      </TodoDescription>
      <CheckedContainer>
        <Text fontSize="xl">isComplete</Text>
        <Stack direction="row" id="isComplete" onClick={handlerToggleEvent}>
          <Switch colorScheme="teal" size="lg" isChecked={isComplete} />
        </Stack>
      </CheckedContainer>
      <CheckedContainer>
        <Text fontSize="xl">isPrivate</Text>
        <Stack direction="row" id="isPrivate" onClick={handlerToggleEvent}>
          <Switch colorScheme="teal" size="lg" isChecked={isPrivate} />
        </Stack>
      </CheckedContainer>
      <TodoBtnsContainer>
        <Button
          colorScheme="teal"
          size="md"
          width="250px"
          marginLeft="50px"
          onClick={() => navigate(RouteNames.TODOS)}
        >
          Back
        </Button>
      </TodoBtnsContainer>
    </TodoContainer>
  );
};
