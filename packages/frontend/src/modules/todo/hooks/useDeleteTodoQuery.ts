import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../services/todo.service';
import { useToastError } from '../../common/errors/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';

export const useDeleteTodoQuery = (id: string) => {
  const showError = useToastError();
  const service = new TodoService();
  const client = useQueryClient();
  return useMutation({
    mutationFn: () => service.deleteTodo(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    },
    onError: showError
  });
};
