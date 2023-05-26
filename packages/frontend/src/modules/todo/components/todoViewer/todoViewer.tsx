import { Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { TodoState } from '../../types/todo.state.type.';
import { useMatchMedia } from '../../../common/hooks/useMatchMedia';
import { TodoListMobile } from '../mobile/TodoListMobile';
import { TodoListTablet } from '../tablet/TodoListTablet';
import { TodoListDesktop } from '../desktop/TodoListDesktop';

const TodoViewer = () => {
  const [view, setView] = useState<TodoState>('all');
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  return (
    <Stack>
      <ButtonGroup>
        <Button variant={view === 'all' ? 'outline' : 'solid'} onClick={() => setView('all')}>
          all
        </Button>
        <Button
          variant={view === 'private' ? 'outline' : 'solid'}
          onClick={() => setView('private')}
        >
          private
        </Button>
        <Button
          variant={view === 'completed' ? 'outline' : 'solid'}
          onClick={() => setView('completed')}
        >
          completed
        </Button>
      </ButtonGroup>

      {isMobile && <TodoListMobile state={view} />}
      {isTablet && <TodoListTablet state={view} />}
      {isDesktop && <TodoListDesktop state={view} />}
    </Stack>
  );
};

export { TodoViewer };
