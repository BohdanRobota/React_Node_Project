import { useQuery } from 'react-query';
import { TodoService } from '../services/todo.service';
import { useToastError } from '../../common/hooks/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';

export const useTodosQuery = () => {
  const showError = useToastError();
  const todoService = new TodoService();
  return useQuery({
    queryFn: () => todoService.getTodos(),
    queryKey: [QUERY_KEYS.TODOS],
    staleTime: 5000,
    onError: showError
  });
};
