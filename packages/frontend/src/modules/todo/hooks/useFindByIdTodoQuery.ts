import { useQuery } from 'react-query';
import { TodoService } from '../services/todo.service';
import { useToastError } from '../../common/errors/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';

export const useFindByIdTodoQuery = (id: string) => {
  const showError = useToastError();
  const todoService = new TodoService();
  return useQuery({
    queryFn: () => todoService.getTodoById(id),
    queryKey: [QUERY_KEYS.TODOS, id],
    onError: showError
  });
};
