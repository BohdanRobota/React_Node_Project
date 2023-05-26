import React from 'react';
import AddTodoForm from '../todo/components/addTodoForm/AddTodoForm';
import { TodoListDesktop } from '../todo/components/desktop/TodoListDesktop';
import { TodoListMobile } from '../todo/components/mobile/TodoListMobile';
import { useMatchMedia } from '../common/hooks/useMatchMedia';
import { TodoListTablet } from '../todo/components/tablet/TodoListTablet';
import { TodoViewer } from '../todo/components/todoViewer/todoViewer';

const Todos = () => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  return (
    <>
      <AddTodoForm />
      {isMobile && <TodoListMobile state={'all'} />}
      {isTablet && <TodoListTablet state={'all'} />}
      {isDesktop && <TodoListDesktop state={'all'} />}
      {/* <TodoViewer/> */}
    </>
  );
};

export default Todos;
