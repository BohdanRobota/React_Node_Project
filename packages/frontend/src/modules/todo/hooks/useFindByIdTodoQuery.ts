import { useQuery } from 'react-query';
import { TodoService } from '../services/todo.service';
import { useToastError } from '../../common/hooks/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';

export const useFindByIdTodoQuery = (id: string) => {
  const showError = useToastError();
  const todoService = new TodoService();
  return useQuery({
    queryFn: () => todoService.getTodoById(id),
    queryKey: ['todos', id],
    onError: showError,
    staleTime: 5000
  });
};
