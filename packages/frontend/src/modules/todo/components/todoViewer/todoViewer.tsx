import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { TodoState, TodoStateEnum } from '../../types/todo.state.type.';
import { useMatchMedia } from '../../../common/hooks/useMatchMedia';
import { TodoListMobile } from '../mobile/TodoListMobile';
import { TodoListTablet } from '../tablet/TodoListTablet';
import { TodoListDesktop } from '../desktop/TodoListDesktop';

const TodoViewer = () => {
  const [view, setView] = useState<TodoState>('all');
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  return (
    <>
      <Stack>
        <ButtonGroup>
          <Button
            variant={view === TodoStateEnum.ALL ? 'outline' : 'solid'}
            onClick={() => setView(TodoStateEnum.ALL)}
          >
            all
          </Button>
          <Button
            variant={view === TodoStateEnum.isPrivate ? 'outline' : 'solid'}
            onClick={() => setView(TodoStateEnum.isPrivate)}
          >
            private
          </Button>
          <Button
            variant={view === TodoStateEnum.isComplete ? 'outline' : 'solid'}
            onClick={() => setView(TodoStateEnum.isComplete)}
          >
            completed
          </Button>
        </ButtonGroup>
        {isMobile && <TodoListMobile state={view} />}
        {isDesktop && <TodoListDesktop state={view} />}
      </Stack>
      {isTablet && <TodoListTablet state={view} />}
    </>
  );
};

export { TodoViewer };
