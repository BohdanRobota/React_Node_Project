import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../services/todo.service';
import { useToastError } from '../../common/errors/useToastError';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';

export const useToggleTodoStatusQuery = (id: string, isComplete: boolean) => {
  const showError = useToastError();
  const todoService = new TodoService();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => todoService.toggleTodo(id, !isComplete),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.TODOS]),
    onError: showError
  });
};
