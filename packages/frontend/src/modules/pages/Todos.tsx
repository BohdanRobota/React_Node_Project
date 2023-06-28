import React from 'react';
import AddTodoForm from '../todo/components/addTodoForm/AddTodoForm';
import { TodoListDesktop } from '../todo/components/desktop/TodoListDesktop';
import { TodoListMobile } from '../todo/components/mobile/TodoListMobile';
import { useMatchMedia } from '../common/hooks/useMatchMedia';
import { TodoListTablet } from '../todo/components/tablet/TodoListTablet';
import { TodoViewer } from '../todo/components/todoViewer/todoViewer';
import { MainContainer } from '../common/containers/AppContainer/MainContainer';

const Todos = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  return (
    <>
      <AddTodoForm />
      <TodoViewer />
    </>
  );
};

export default Todos;
