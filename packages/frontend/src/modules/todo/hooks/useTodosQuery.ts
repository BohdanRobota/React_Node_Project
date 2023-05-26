import { useQuery } from 'react-query';
import { TodoService } from '../services/todo.service';
import { useToastError } from '../../common/hooks/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { TodoState } from '../types/todo.state.type.';

export const useTodosQuery = (state: TodoState) => {
  const showError = useToastError();
  const todoService = new TodoService();
  return useQuery({
<<<<<<< Updated upstream
    queryFn: () => todoService.getTodos(state),
    queryKey: [QUERY_KEYS.TODOS, state],
    staleTime: 5000,
=======
    queryFn: () => todoService.getTodos(),
    queryKey: ['todos'],
>>>>>>> Stashed changes
    onError: showError
  });
};
