import React from 'react';
import { Spinner } from '@chakra-ui/react';
import { useTodosQuery } from '../../hooks/useTodosQuery';
import { TodoItemDesktop } from './TodoItemDesktop';
import {
  TableBodyContainer,
  Table,
  TableContainer,
  Th,
  Tr,
  THead,
  TBody
} from './TodoListDesctop.styled';
import { TodoState } from '../../types/todo.state.type.';

interface TodoListDesctopProps {
  state: TodoState;
}
export const TodoListDesktop = ({ state }: TodoListDesctopProps) => {
  const { data, isLoading, isSuccess } = useTodosQuery(state);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <TableContainer>
      <Table>
        <THead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Actions</Th>
          </Tr>
        </THead>
      </Table>
      <TableBodyContainer>
        <Table>
          <TBody>
            {isSuccess && data.data.map((todo) => <TodoItemDesktop key={todo.id} {...todo} />)}
          </TBody>
        </Table>
      </TableBodyContainer>
    </TableContainer>
  );
};
